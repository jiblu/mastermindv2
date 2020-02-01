import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Colors, Metrics } from '../Themes/index'
import Stack from '../Components/Stack'
import Text from '../Components/Text'
import TextDisplay from '../Components/TextDisplay'
import Input from '../Components/Input'
import Button from '../Components/Button'
import Guesses from './Guesses'
import isValidGuess from '../Helpers/isValidGuess'
import createFeedback from '../Helpers/createFeedback'
import { saveGuess, winGame } from '../Actions/Index'
import ProgressBar from '../Components/ProgressBar'
import ResultPage from './ResultPage'

const MainContainer = styled.div`
  display: flex;
  @media (max-width: 900px) {
    display: block;
  }
`

const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex-grow: 1;
`

const MidContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 4;
  border-radius: 5px;
  background-color: ${Colors.lightGray};
  padding: 15px 0;
  margin: 15px 0;
`

class Dashboard extends Component {

  state = {
    currentGuess: null
  }

  handleChange (id, e) {
    this.setState({
      [id]: e.target.value
    })
  }

  handleSubmit () {
    let { currentGuess } = this.state
    let { rangeUpperLimit, secretCode } = this.props
    if (isValidGuess(currentGuess, rangeUpperLimit)) {
      let feedback = createFeedback(currentGuess, secretCode)
      this.props.saveGuess({
        guess: currentGuess,
        feedback: feedback
      })
      if (feedback.numPlaces === 4) {
        this.props.winGame()
      }
      
    } else {
      let alertMsg = `Must be a valid 4 digit number. Each digit must be betweem 0 and ${this.props.rangeUpperLimit}.`
      alert(alertMsg)
    }
  }

  render () {
    switch (this.props.gameStatus) {
      case 'win':
        return (
          <ResultPage
            result='You Win!'
            exitGame={this.props.onExitGame}
            secretCode={this.props.secretCode}
            guessesLeft={this.props.guessesLeft}
            username={this.props.username}
            score={this.props.score}
          >
            <Guesses guesses={this.props.guesses} />
          </ResultPage>
        )
      case 'lose':
        return (
          <ResultPage
            result='You Lose!'
            exitGame={this.props.onExitGame}
            secretCode={this.props.secretCode}
            guessesLeft={this.props.guessesLeft}
            username={this.props.username}
            score={this.props.score}
          >
            <Guesses guesses={this.props.guesses} />
          </ResultPage>
        )
      default: 
        return (
          <MainContainer>
            <SideContainer>
              <Text
                size='medium'
                color='secondary'
                align='center'
              >
                Game Stats
              </Text>
              <TextDisplay text='Username' value={this.props.username} />
              <TextDisplay text='Level' value={this.props.level} />
              <TextDisplay text='Score' value={this.props.score} />
              <TextDisplay text='Guesses Left' value={this.props.guessesLeft} />
              <TextDisplay text='Secret Code' value={this.props.secretCode} />
            </SideContainer>
            <MidContainer>
              <ProgressBar percentage={100 - (this.props.guessesLeft * 10)} />
              <Input
                text='Current Guess'
                id='currentGuess'
                placeholder='please enter four digit number'
                onChange={this.handleChange.bind(this)}
              />
              <Stack justify='center'>
                <Button
                  bgcolor={Colors.white}
                  color={Colors.primary}
                  onClick={this.handleSubmit.bind(this)}
                >
                  Give Up
                </Button>
                <Button onClick={this.handleSubmit.bind(this)}>Submit Guess</Button>
              </Stack>
            </MidContainer>
            <SideContainer>
              <Text
                size='medium'
                color='secondary'
                align='center'
              >
                Your Guesses
              </Text>
              <Guesses guesses={this.props.guesses}/>
            </SideContainer>
          </MainContainer>
        )
    }
  }
}

const mapStateToProps = state => {
  return {
    username: state.username,
    level: state.level,
    playing: state.playing,
    score: state.score,
    guessesLeft: state.guessesLeft,
    secretCode: state.secretCode,
    rangeUpperLimit: state.rangeUpperLimit,
    guesses: state.guesses,
    gameStatus: state.gameStatus
  }
}

const mapDispatchToProps = { saveGuess, winGame }
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
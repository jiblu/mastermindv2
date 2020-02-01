import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import UIfx from 'uifx'
import oopsMp3 from '../Assets/oops.wav'
import wrongMp3 from '../Assets/wrong.mp3'
import yayMp3 from '../Assets/yay.wav'
import { Colors, Metrics } from '../Themes/index'
import Stack from '../Components/Stack'
import Text from '../Components/Text'
import TextDisplay from '../Components/TextDisplay'
import Input from '../Components/Input'
import Button from '../Components/Button'
import Guesses from './Guesses'
import isValidGuess from '../Helpers/isValidGuess'
import createFeedback from '../Helpers/createFeedback'
import { saveGuess, winGame, loseGame, exitGame } from '../Actions/Index'
import ProgressBar from '../Components/ProgressBar'
import ResultPage from './ResultPage'
import Hint from '../Components/Hint'

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
  padding: 15px 5px;
  margin: 10px 0;
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
    const oops = new UIfx(oopsMp3)
    const wrong = new UIfx(wrongMp3)
    const yay = new UIfx(yayMp3)
    let { currentGuess } = this.state
    let { rangeUpperLimit, secretCode, guessesLeft, score } = this.props
    if (isValidGuess(currentGuess, rangeUpperLimit)) {
      let feedback = createFeedback(currentGuess, secretCode)
      this.props.saveGuess({
        guess: currentGuess,
        feedback: feedback
      })
      if (feedback.numPlaces === 4) {
        this.props.winGame()
        yay.play()
      } else {
        wrong.play()
      }
      if (guessesLeft <= 1 || score <= 10) {
        this.props.loseGame()
      }
      this.setState({
        currentGuess: ''
      })
    } else {
      oops.play()
      let alertMsg = `Must be a valid 4 digit number. Each digit must be between 0 and ${this.props.rangeUpperLimit}.`
      alert(alertMsg)
    }
  }

  render () {
    let resultMessage = this.props.gameStatus === 'win' ? 'You Win!' : this.props.gameStatus === 'lose' ? 'You Lose!' : null
    if (this.props.gameStatus !== null) {
      return (
        <ResultPage
        result={resultMessage}
        exitGame={this.props.exitGame}
        secretCode={this.props.secretCode}
        guessesLeft={this.props.guessesLeft}
        username={this.props.username}
        score={this.props.score}
        gameStatus={this.props.gameStatus}
      >
        <Guesses guesses={this.props.guesses} />
      </ResultPage>
      )
    } else {
      return (
        <MainContainer>
          <SideContainer>
            <Text size='medium' color='secondary' align='center'>
              Game Stats
            </Text>
            <TextDisplay text='Username' value={this.props.username} />
            <TextDisplay text='Level' value={this.props.level} />
            <TextDisplay text='Score' value={this.props.score} />
            <TextDisplay text='Guesses Left' value={this.props.guessesLeft} />
            {/* <TextDisplay text='Secret Code' value={this.props.secretCode} /> */}
          </SideContainer>
          <Stack vertical>
            <MidContainer>
              <Text size='smaller' color='red' align='center'>
                (numbers must be between 0 and {this.props.rangeUpperLimit})
              </Text>
              <ProgressBar percentage={100 - (this.props.guessesLeft * 10)} />
              <Input
                text='Current Guess'
                id='currentGuess'
                placeholder='please enter four digit number'
                onChange={this.handleChange.bind(this)}
                value={this.state.currentGuess}
              />
              <Stack justify='center'>
                <Button
                  bgcolor={Colors.white}
                  color={Colors.primary}
                  onClick={this.props.exitGame}
                >
                  Give Up
                </Button>
                <Button onClick={this.handleSubmit.bind(this)}>Submit Guess</Button>
              </Stack>
            </MidContainer>
            <MidContainer>
              <Text size='medium' color='secondary' align='center' margin='0 0 5px 0'>
                Hints
              </Text>
              <Text size='smaller' color='red' align='center'>
                (each hint will deduct 3 available guesses)
              </Text>
              <Stack justify='space-around'>
                <Hint />
                <Hint />
                <Hint />
              </Stack>
              <Button bgcolor={Colors.white} color={Colors.orange} onClick={this.props.exitGame}>
                Buy Hint
              </Button>
            </MidContainer>
          </Stack>
          <SideContainer>
            <Text size='medium' color='secondary' align='center'>
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
    gameStatus: state.gameStatus,
  }
}

const mapDispatchToProps = { saveGuess, winGame, loseGame, exitGame }
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
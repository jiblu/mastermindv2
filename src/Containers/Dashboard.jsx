import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import styled from 'styled-components'
import UIfx from 'uifx'
import dingMp3 from '../Assets/ding.wav'
import oopsMp3 from '../Assets/oops.wav'
import wrongMp3 from '../Assets/wrong.mp3'
import yayMp3 from '../Assets/yay.wav'
import awwMp3 from '../Assets/aww.wav'
import { Colors, Metrics } from '../Constants/index.js'
import Stack from '../Components/Stack.jsx'
import Text from '../Components/Text.jsx'
import TextDisplay from '../Components/TextDisplay.jsx'
import Input from '../Components/Input.jsx'
import Button from '../Components/Button.jsx'
import Guesses from './Guesses.jsx'
import isValidGuess from '../Helpers/isValidGuess.js'
import createFeedback from '../Helpers/createFeedback.js'
import pickRandomHint from '../Helpers/pickRandomHint.js'
import { saveGuess, winGame, loseGame, exitGame, updateGuessesScore } from '../Actions/Index.js'
import ProgressBar from '../Components/ProgressBar.jsx'
import ResultPage from './ResultPage.jsx'
import Hint from '../Components/Hint.jsx'
import Axios from 'axios'

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
  background-color: ${Colors.iceBlue};
  padding: 15px 5px;
  margin: 10px 0;
`

class Dashboard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentGuess: null,
      showHint0: false,
      showHint1: false,
      showHint2: false,
      showHint3: false,
      hintNotification: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleBuyHint = this.handleBuyHint.bind(this)
  }

  componentDidMount () {
    axios
      .get('/api/users')
      .then(response => {
        console.log(JSON.stringify(response.data))
      })
  }

  handleChange (id, e) {
    this.setState({
      [id]: e.target.value
    })
  }

  handleSubmit () {
    const { currentGuess } = this.state
    const { rangeUpperLimit, secretCode, guessesLeft, score } = this.props
    if (isValidGuess(currentGuess, rangeUpperLimit)) {
      const feedback = createFeedback(currentGuess, secretCode)
      if (feedback.numPlaces === 4) {
        const yay = new UIfx(yayMp3)
        this.props.winGame()
        yay.play()
      } else {
        const wrong = new UIfx(wrongMp3)
        wrong.play()
        this.props.saveGuess({
          guess: currentGuess,
          feedback: feedback
        })
        if (guessesLeft <= 1 || score <= 10) {
          const aww = new UIfx(awwMp3)
          this.props.loseGame()
          aww.play()
        }
        this.setState({
          currentGuess: ''
        })
      }
    } else {
      const oops = new UIfx(oopsMp3)
      oops.play()
      const alertMsg = `Must be a valid 4 digit number. Each digit must be between 0 and ${this.props.rangeUpperLimit}.`
      alert(alertMsg)
    }
  }

  handleBuyHint () {
    const ding = new UIfx(dingMp3)
    ding.play()
    const randomHintIndex = pickRandomHint()
    this.setState({
      [`showHint${randomHintIndex}`]: true,
      hintNotification: `Your hint: ${this.props.secretCode[randomHintIndex]} unlocked!`
    }, () => this.props.updateGuessesScore(this.props.guessesLeft - 3, this.props.score - 30))
    setTimeout(() => {
      this.setState({
        hintNotification: null
      })
    }, 1000)
  }

  render () {
    const buyHintDisabled = !(this.props.guessesLeft - 3 >= 0)
    const resultMessage = this.props.gameStatus === 'win' ? 'You Win!' : this.props.gameStatus === 'lose' ? 'You Lose!' : null
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
              <Text size='smaller' color='linkedinblue' align='center'>
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
                  color={Colors.linkedinblue}
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
              <Text size='smaller' color='linkedinblue' align='center'>
                (each hint will deduct 3 available guesses)
              </Text>
              <Text size='smaller' color='linkedinblue' align='center'>
                (* caution * may buy hint that was already purchased)
              </Text>
              <Stack justify='space-around'>
                <Hint hint={this.props.secretCode[0]} show={this.state.showHint0} />
                <Hint hint={this.props.secretCode[1]} show={this.state.showHint1} />
                <Hint hint={this.props.secretCode[2]} show={this.state.showHint2} />
                <Hint hint={this.props.secretCode[3]} show={this.state.showHint3} />
              </Stack>
              {this.state.hintNotification}
              <Button
                bgcolor={buyHintDisabled ? Colors.light : Colors.white}
                color={Colors.linkedinblue}
                onClick={this.handleBuyHint.bind(this)}
                disabled={buyHintDisabled}
                cursor={buyHintDisabled ? 'default' : 'cursor'}
              >
                Buy Hint
              </Button>
            </MidContainer>
          </Stack>
          <SideContainer>
            <Text size='medium' color='secondary' align='center'>
              Your Guesses
            </Text>
            <Guesses guesses={this.props.guesses} />
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

const mapDispatchToProps = { saveGuess, winGame, loseGame, exitGame, updateGuessesScore }
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

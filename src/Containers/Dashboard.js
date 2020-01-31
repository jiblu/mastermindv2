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
import isValidGuess from './isValidGuess'

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
  flex-grow: 6
`

class Dashboard extends Component {

  state = {
    currentGuess: null
  }

  handleChange (id, e) {
    // get the current guess
    // confirm the guess is a valid input
    // create feedback by comparing input against secretcode
    // push feedback to feedbacks array
    // render feedbacks onto dashboard page
    this.setState({
      [id]: e.target.value
    })
  }

  handleSubmit () {
    let { currentGuess } = this.state
    console.log(isValidGuess(currentGuess))
  }

  render () {
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
          <Input
            text='Current Guess'
            id='currentGuess'
            placeholder='please enter four digit number'
            onChange={this.handleChange.bind(this)}
          />
          <Button onClick={this.handleSubmit.bind(this)}>Submit Guess</Button>
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

const mapStateToProps = state => {
  return {
    username: state.username,
    level: state.level,
    playing: state.playing,
    score: state.score,
    guessesLeft: state.guessesLeft,
    secretCode: state.secretCode,
    rangeUpperLimit: state.rangeUpperLimit,
    guesses: state.guesses
  }
}

export default connect(mapStateToProps)(Dashboard)
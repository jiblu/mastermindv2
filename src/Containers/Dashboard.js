import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Colors, Metrics } from '../Themes/index'
import Stack from '../Components/Stack'
import Text from '../Components/Text'
import TextDisplay from '../Components/TextDisplay'
import Input from '../Components/Input'

const SideContainer = styled.div`
  border-radius: 5px;
  flex-grow: 1
`

const MidContainer = styled.div`
  flex-grow: 6
`

const Dashboard = props => {
  return (
    <Stack justify='space-between'>
      <SideContainer>
        <Text
          size='medium'
          color='secondary'
          align='center'
        >
          Game Stats
        </Text>
        <TextDisplay text='Username' value={props.username} />
        <TextDisplay text='Level' value={props.level} />
        <TextDisplay text='Score' value={props.score} />
        <TextDisplay text='Guesses Left' value={props.guessesLeft} />
        <TextDisplay text='Secret Code' value={props.secretCode} />
      </SideContainer>
      <MidContainer>
        <Input
          text='Current Guess'
          id='currentGuess'
          placeholder='please enter four digit number'
          // onChangeHandler={this.onChangeHandler.bind(this)}
          // value={this.state.currentGuess}
        />
      </MidContainer>
      <SideContainer>
        <Text
          size='medium'
          color='secondary'
          align='center'
        >
          Your Guesses
        </Text>
        some right content
      </SideContainer>
    </Stack>
  )
}

const mapStateToProps = state => {
  return {
    username: state.username,
    level: state.level,
    playing: state.playing,
    score: state.score,
    guessesLeft: state.guessesLeft,
    secretCode: state.secretCode,
    rangeUpperLimit: state.rangeUpperLimit
  }
}

export default connect(mapStateToProps)(Dashboard)
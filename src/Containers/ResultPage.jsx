import React from 'react'
import styled from 'styled-components'
import Text from '../Components/Text.jsx'
import TextDisplay from '../Components/TextDisplay.jsx'
import Stack from '../Components/Stack.jsx'
import Button from '../Components/Button.jsx'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

const Result = styled.div`
`

const ResultPage = props => {
  const { width, height } = useWindowSize()
  const confetti = props.gameStatus === 'win'
    ? <Confetti width={width} height={height} /> : null
  return (
    <Result>
      <Stack vertical align='center'>
        <Text size='medium'>
          {props.result}
        </Text>
        {JSON.stringify(props.confetti)}
        <TextDisplay text='Your Score' value={props.score} />
        <TextDisplay text='Username' value={props.username} />
        <TextDisplay text='Guesses Used' value={`${(10 - props.guessesLeft)} / 10`} />
        <TextDisplay text='Secret Code' value={props.secretCode} />
        {props.children}
        <Button onClick={() => props.exitGame()}>Play Again</Button>
        {confetti}
      </Stack>
    </Result>
  )
}

export default ResultPage

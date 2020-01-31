import React from 'react'
import styled from 'styled-components'
import { Colors, Metrics } from '../Themes/index'

const GuessesTable = styled.table`
  border-collapse: collapse;
  border-radius: ${Metrics.radiusSmall}px;
  overflow: hidden;
`
const GuessesRow = styled.tr`

`

const GuessesHeader = styled.th`
  padding: 1em;
  background: ${Colors.light};
  border-bottom: 2px solid ${Colors.white};
  font-size: 0.25em;
  width: 80px
`
const GuessesData = styled.td`
  padding: 1em;
  background: ${Colors.light};
  border-bottom: 2px solid ${Colors.white};
  text-align: center
`

const Guesses = props => {
  return (
    <GuessesTable>
      <GuessesRow>
        <GuessesHeader>Your Guess</GuessesHeader>
        <GuessesHeader>Numbers</GuessesHeader>
        <GuessesHeader>Numbers AND Places</GuessesHeader>
      </GuessesRow>
      {props.guesses.map((guess, i) => {
        return (
          <GuessesRow key={i}>
            <GuessesData>{guess.guess}</GuessesData>
            <GuessesData>{guess.feedback.nums}</GuessesData>
            <GuessesData>{guess.feedback.numPlaces}</GuessesData>
          </GuessesRow>
        )
      })}
    </GuessesTable>
  )
}

export default Guesses
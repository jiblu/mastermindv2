import React from 'react'
import styled from 'styled-components'
import { Colors, PegColors } from '../Constants/index'
import Peg from './Peg'

const PegsDiv = styled.div`

`

const Pegs = props => {
  const pegColor = (number) => {
    return number ? PegColors[number.toString()] : null
  }
  return (
    <PegsDiv>
      {props.pegs.map((pegValue) => {
        return <Peg color={pegColor(pegValue)} />
      })}
    </PegsDiv>
  )
}
export default Pegs

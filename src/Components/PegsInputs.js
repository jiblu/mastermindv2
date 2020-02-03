import React, { Component } from 'react'
import styled from 'styled-components'
import { Colors, PegColors } from '../Constants/index'
import Peg from './Peg'
import PegsInput from './PegsInput'

const InputsDiv = styled.div`

`

const PegsInputs = props => {
  return (
    <div>
      <PegsInput max={props.max} />
      <PegsInput max={props.max} />
      <PegsInput max={props.max} />
      <PegsInput max={props.max} /> 
    </div>
  )
}

export default PegsInputs
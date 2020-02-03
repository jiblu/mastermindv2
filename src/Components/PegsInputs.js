import React from 'react'
import styled from 'styled-components'
import Stack from './Stack'
import PegsInput from './PegsInput'

const InputsDiv = styled.div`

`

const PegsInputs = props => {
  return (
    <Stack>
      <PegsInput max={props.max} />
      <PegsInput max={props.max} />
      <PegsInput max={props.max} />
      <PegsInput max={props.max} /> 
    </Stack>
  )
}

export default PegsInputs
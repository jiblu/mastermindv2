import React from 'react'
import styled from 'styled-components'
import { Colors } from '../Constants/index.js'

const LabelStyle = styled.label`
  color: ${Colors.black};
  display: inline-block;
  width: 100px;
`

const Label = props => {
  return (
    <LabelStyle>
      {props.text}
    </LabelStyle>
  )
}

export default Label

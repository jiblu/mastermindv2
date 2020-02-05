import React from 'react'
import styled from 'styled-components'
import { Colors, Metrics } from '../Constants/index.js'

const LabelStyle = styled.label`
  color: ${Colors.black};
  display: inline-block;
  width: 95px;
  font-size: ${Metrics.fontSize.small}px
`

const Label = props => {
  return (
    <LabelStyle>
      {props.text}
    </LabelStyle>
  )
}

export default Label

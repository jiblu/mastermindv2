import React from 'react'
import styled from 'styled-components'
import { Colors, Metrics } from '../Constants/index.js'
import Label from './Label.jsx'

const InputField = styled.input`
  border-color: ${Colors.secondaryAccent};
  background-color: ${Colors.white};
  color: ${Colors.secondary};
  border-radius: calc(${Metrics.radiusSmall}px - 2px);
  font-size: ${Metrics.fontSize.smallest}px;
  width: 100px;
  margin: 5px;
  padding: 5px;
  cursor: pointer;
`

const Input = props => {
  return (
    <div>
      <Label text={props.text} />
      <InputField
        placeholder={props.placeholder}
        onChange={(e) => props.onChange(props.id, e)}
        value={props.value}
      />
    </div>
  )
}

export default Input

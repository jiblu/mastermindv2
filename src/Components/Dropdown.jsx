import React from 'react'
import styled from 'styled-components'
import { Colors, Metrics } from '../Constants/index.js'
import Label from './Label.jsx'

const Select = styled.select`
  border-color: ${Colors.secondaryAccent};
  background-color: ${Colors.light};
  color: ${Colors.secondary};
  border-radius: calc(${Metrics.radiusSmall}px - 2px);
  font-size: ${Metrics.fontSize.smaller}px;
  width: 114px;
  margin: 5px;
  padding: 5px;
  cursor: pointer;

`

const Dropdown = props => {
  return (
    <div>
      <Label text={props.text} />
      <Select onChange={(e) => props.onChange(props.id, e)}>
        {props.list.map((item, i) => {
          return (
            <option key={i}>{item}</option>
          )
        })}
      </Select>
    </div>
  )
}

export default Dropdown

import React from 'react'
import styled from 'styled-components'
import { Colors, Metrics } from '../Constants/index.js'
import Label from './Label.jsx'
import Stack from './Stack.jsx'

const Text = styled.div`
  border-color: ${Colors.secondaryAccent};
  background-color: ${Colors.light};
  color: ${Colors.secondary};
  border-radius: calc(${Metrics.radiusSmall}px - 2px);
  font-size: ${Metrics.fontSize.smaller}px;
  width: ${Metrics.buttonWidth - 50}px;
  margin: 5px;
  padding: 5px;
`

const TextDisplay = props => {
  return (
    <Stack horizontal align='center'>
      <Label text={props.text} />
      <Text>
        {props.value}
      </Text>
    </Stack>
  )
}

export default TextDisplay

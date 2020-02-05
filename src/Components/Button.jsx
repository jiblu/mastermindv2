import styled from 'styled-components'
import { Colors, Metrics } from '../Constants/index.js'

const Button = styled.button`
  background-color: ${props => props.bgcolor ? props.bgcolor : Colors.linkedinblue};
  color: ${props => props.color ? props.color : Colors.primaryAccent};
  border-radius: ${Metrics.radiusSmall}px;
  font-size: ${Metrics.fontSize.small}px;
  width: 100px;
  margin: 5px;
  padding: 5px;
  cursor: ${props => props.cursor ? props.cursor : 'pointer'};
  &:hover {
    font-size: calc(${Metrics.fontSize.small}px + 0.5px)
  } 

`

export default Button

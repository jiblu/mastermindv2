import React from 'react'
import styled, { css } from 'styled-components'
import { Colors } from '../Constants/index'

const PegDiv = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 5px;
  border-radius: 15px;
  border: 1px solid ${Colors.gray};
  background-color: ${props => props.color ? props.color : 'transparent' };
  ${props => props.edit && css`
    cursor: pointer
  `}
`

const Peg = props => {
  return (
    <PegDiv color={props.color} edit={props.edit} />
  )
}
export default Peg

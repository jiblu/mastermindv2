import React from 'react'
import styled, { css } from 'styled-components'
import { Colors } from '../Constants/index'

const PegContainer = styled.div`
  width: 25px;
  height: 25px;
  ${props => props.selection && css`
    border-left: 1px solid ${Colors.gray};
    margin-left: 10px
  `}
`

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
    <PegContainer selection={props.selection}>
      <PegDiv color={props.color} edit={props.edit} onClick={() => props.onClick(props.id)} />
    </PegContainer>
  )
}

export default Peg

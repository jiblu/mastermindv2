import React from 'react'
import styled from 'styled-components'
import { Colors } from '../Constants/index'

const Peg = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 15px;
  border: 1px solid ${Colors.gray};
  background-color: ${props => props.color ? props.color : 'transparent'}
`

export default Peg
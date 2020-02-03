import React from 'react'
import styled from 'styled-components'
import { Colors } from '../Themes/index'
import { HelpOutline } from '@material-ui/icons'

const HintDiv = styled.div`
  background-color: ${Colors.orange};
  border-radius: 5px;
  width: 30px;
  height: 30px;
  margin: 5px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center
`
const Hint = props => {
  return (
    <HintDiv>
      {props.show ? props.hint : <HelpOutline style={{ color: Colors.yellow }} />}
    </HintDiv>
  )
}

export default Hint

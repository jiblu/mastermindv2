import React from 'react'
import styled from 'styled-components'
import Stack from './Stack'
import Label from './Label'

const ToggleWrapper = styled.div`
  position: relative;
  margin-left: 5px
`
const ToggleLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 24px;
  border-radius: 15px;
  background: #4fbe79;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`
const Toggle = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 24px;
  &:checked + ${ToggleLabel} {
    background: #bebebe;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`

const ToggleElement = props => {
  return (
    <Stack horizontal align='center'>
      <Label text={props.text} />
      <ToggleWrapper>
        <Toggle id="checkbox" type="checkbox" onClick={() => props.onClick()} />
        <ToggleLabel htmlFor="checkbox"/>
      </ToggleWrapper>
    </Stack>
  )
}

export default ToggleElement
import React from 'react'
import styled from 'styled-components'
import { Colors } from '../Constants/index.js'

const Tracker = styled.div`
  width: 90%;
  height: 20px;
  margin: 15px auto;
  border-radius: 10px;
  background-color: ${Colors.light};
`
const ProgressInTracker = styled.div`
  width: ${props => props.percentage}%;
  background-color: ${Colors.linkedinblue};
  height: 20px;
  border-radius: 10px;
`

const ProgressBar = props => {
  return (
    <Tracker>
      <ProgressInTracker percentage={props.percentage} />
    </Tracker>
  )
}

export default ProgressBar

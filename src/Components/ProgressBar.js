import React from 'react'
import styled from 'styled-components'
import { Colors } from '../Themes/index'

const Tracker = styled.div`
  width: 90%;
  height: 20px;
  margin: 15px auto;
  border-radius: 10px;
  background-color: ${Colors.light};
`
const ProgressInTracker = styled.div`
  width: ${props => props.percentage}%;
  background-color: ${Colors.green};
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

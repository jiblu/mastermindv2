import React, { useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Colors, Metrics } from '../Themes/index'
import Settings from './Settings'
import Dashboard from './Dashboard'

const ContentDiv = styled.div`
  margin: 15px;
  padding: 15px;
  border: 1px ${Colors.light} solid;
  border-radius: ${Metrics.radiusSmall}px;
`

const GameContainer = props => {
  const [playing, toggleGame] = useState(false)
  const Content = props.playing === false ? <Settings /> : <Dashboard />
  return (
    <ContentDiv>
      {Content}
      {props.playing.toString()}
    </ContentDiv>
  )
}

const mapStateToProps = state => {
  return {
    playing: state.playing
  }
}

export default connect(mapStateToProps)(GameContainer)
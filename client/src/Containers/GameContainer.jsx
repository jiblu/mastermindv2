import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Colors, Metrics } from '../Constants/index.js'
import Settings from './Settings.jsx'
import Dashboard from './Dashboard.jsx'

const ContentDiv = styled.div`
  margin: 15px;
  padding: 15px;
  border: 1px ${Colors.light} solid;
  border-radius: ${Metrics.radiusSmall}px;
`

const GameContainer = props => {
  const Content = props.playing === false ? <Settings /> : <Dashboard />
  return (
    <ContentDiv>
      {Content}
    </ContentDiv>
  )
}

const mapStateToProps = state => {
  return {
    playing: state.playing
  }
}

export default connect(mapStateToProps)(GameContainer)

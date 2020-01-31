import React from 'react'
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
  const Content = props.playing === false ?
    <Settings /> :
    <Dashboard
      username={props.username} 
    />
  return (
    <ContentDiv>
      {Content}
    </ContentDiv>
  )
}

const mapStateToProps = state => {
  return {
    playing: state.playing,
    username: state.username
  }
}

export default connect(mapStateToProps)(GameContainer)
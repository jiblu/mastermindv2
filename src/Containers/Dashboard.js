import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Colors, Metrics } from '../Themes/index'
import Stack from '../Components/Stack'
import Text from '../Components/Text'
import TextDisplay from '../Components/TextDisplay'

const SideContainer = styled.div`
  border-radius: 5px;
  flex-grow: 1
`

const MidContainer = styled.div`
  flex-grow: 6
`

const Dashboard = props => {
  return (
    <Stack justify='space-between'>
      <SideContainer>
        <Text
          size='medium'
          color='secondary'
          align='center'
        >
          Game Stats
        </Text>
        <TextDisplay text='Username' value={props.username} />
        <TextDisplay text='Level' value={props.level} />
      </SideContainer>
      <MidContainer>
        some mid content
      </MidContainer>
      <SideContainer>
        <Text
          size='medium'
          color='secondary'
          align='center'
        >
          Your Guesses
        </Text>
        some right content
      </SideContainer>
    </Stack>
  )
}

const mapStateToProps = state => {
  return {
    username: state.username,
    level: state.level
  }
}

export default connect(mapStateToProps)(Dashboard)
import React from 'react'
import styled from 'styled-components'
import { Colors, Metrics } from '../Themes/index'
import Stack from '../Components/Stack'
import LeftConsole from '../Containers/LeftConsole'
import RightConsole from '../Containers/RightConsole'
import MidConsole from '../Containers/MidConsole'
import Text from '../Components/Text'

const SideContainer = styled.div`
  background-color: ${Colors.light};
  border-radius: 5px;
  flex-grow: 1
`

const MidContainer = styled.div`
  flex-grow: 6
`

const Dashboard = props => {
  return (
    <Stack align='center' justify='space-between'>
      <SideContainer>
        <Text
          size='medium'
          color='secondary'
          align='center'
        >
          Game Stats
        </Text>
        <LeftConsole />
      </SideContainer>
      <MidContainer>
        <MidConsole />
      </MidContainer>
      <SideContainer>
        <Text
          size='medium'
          color='secondary'
          align='center'
        >
          Your Guesses
        </Text>
        <RightConsole />
      </SideContainer>
    </Stack>
  )
}

export default Dashboard
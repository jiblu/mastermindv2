import React, { useState } from 'react'
import { Colors } from '../Constants/index.js'
import Rodal from 'rodal'
import 'rodal/lib/rodal.css'
import Rules from './Rules.jsx'
import Leaderboard from './Leaderboard.jsx'
import GameContainer from './GameContainer.jsx'
import PageDiv from '../Components/PageDiv.jsx'
import Text from '../Components/Text.jsx'
import Stack from '../Components/Stack.jsx'
import Button from '../Components/Button.jsx'

const App = props => {
  const [showRules, toggleRules] = useState(false)
  const [showLeaderboard, toggleLeaderboard] = useState(false)
  const RulesModal = props => (
    <Rodal
      height={300}
      visible={showRules}
      onClose={() => toggleRules(!showRules)}
    >
      <Rules />
    </Rodal>
  )
  const LeaderboardModal = props => (
    <Rodal
      height={300}
      visible={showLeaderboard}
      onClose={() => toggleLeaderboard(!showLeaderboard)}
    >
      <Leaderboard />
    </Rodal>
  )

  return (
    <PageDiv>
      <Text align='center' size='large'>Mastermind v.2</Text>
      <Stack justify='center'>
        <Button color={Colors.darkGray} bgcolor={Colors.light} id='rules' onClick={() => toggleRules(!showRules)}>How To Play</Button>
        <Button color={Colors.darkGray} bgcolor={Colors.light} id='leaderboard' onClick={() => toggleLeaderboard(!showLeaderboard)}>Leaderboard</Button>
      </Stack>
      <GameContainer />
      <RulesModal />
      <LeaderboardModal />
    </PageDiv>
  )
}

export default App

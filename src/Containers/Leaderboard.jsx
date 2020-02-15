import React from 'react'
import { connect } from 'react-redux'
import Stack from '../Components/Stack.jsx'
import Text from '../Components/Text.jsx'

const Leaderboard = props => (
  <Stack vertical>
    <Text size='small' color='secondary'>Leaderboard</Text>
    {JSON.stringify(props.topScores)}
    {/* <ol>
      {this.props.topScores.map((scoreObject, i) => {
        return (
          <li key={i}>
            {scoreObject.score}
          </li>
        )
      })}
    </ol> */}
  </Stack>
)

const mapStateToProps = state => {
  return {
    topScores: state.topScores
  }
}
export default connect(mapStateToProps)(Leaderboard)

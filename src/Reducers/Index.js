import {
  SAVE_SETTINGS,
  START_GAME
} from '../Actions/Index'

const initialState = {
  username: 'guest',
  level: 'normal',
  playing: false,
  score: 100,
  guessesLeft: 10,
  secretCode: null,
  rangeUpperLimit: 7,
  guesses: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_SETTINGS:
      return {
        ...state,
        username: action.settings.username,
        level: action.settings.level,
        rangeUpperLimit: action.settings.rangeUpperLimit,
        secretCode: action.settings.secretCode
      }
    case START_GAME:
      return {
        ...state,
        playing: true
      }
    default:
      return state
  }
}

export default rootReducer
import {
  SAVE_SETTINGS,
  START_GAME,
  SAVE_GUESS,
  WIN_GAME,
  LOSE_GAME,
  EXIT_GAME
} from '../Actions/Index'

const initialState = {
  username: 'guest',
  level: 'normal',
  playing: false,
  score: 100,
  guessesLeft: 10,
  secretCode: null,
  rangeUpperLimit: 7,
  guesses: [],
  gameStatus: null,
  confetti: false
}

const rootReducer = (state = initialState, action) => {
  const newGuessesLeft = state.guessesLeft - 1
  const newGuesses = state.guesses.slice(0)
  const newScore = state.score - 10

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
    case SAVE_GUESS:
      newGuesses.push(action.guessObject)
      return {
        ...state,
        guesses: newGuesses,
        guessesLeft: newGuessesLeft,
        score: newScore
      }
    case WIN_GAME:
      return {
        ...state,
        gameStatus: 'win',
        confetti: true
      }
    case LOSE_GAME:
      return {
        ...state,
        gameStatus: 'lose'
      }
    case EXIT_GAME:
      return {
        ...initialState
      }
    default:
      return state
  }
}

export default rootReducer

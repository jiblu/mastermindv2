import axios from 'axios'

export const SAVE_SETTINGS = 'SAVE_SETTINGS'
export const START_GAME = 'START_GAME'
export const SAVE_GUESS = 'SAVE_GUESS'
export const WIN_GAME = 'WIN_GAME'
export const LOSE_GAME = 'LOSE_GAME'
export const EXIT_GAME = 'EDIT_GAME'
export const UPDATE_GUESSES_SCORE = 'UPDATE_GUESSES_SCORE'
export const TOGGLE_SOUND = 'TOGGLE_SOUND'

export const saveSettings = (settings) => {
  const max = settings.level === 'normal' ? 7 : settings.level === 'nightmare' ? 8 : 9
  const url = `https://www.random.org/integers/?num=4&min=0&max=${max}&col=1&base=10&format=plain&rnd=new`
  return (dispatch) => {
    return axios.get(`${url}`)
      .then(response => {
        const newSettings = {
          ...settings,
          secretCode: response.data.split('\n').slice(0, 4).join(''),
          rangeUpperLimit: max
        }
        return newSettings
      })
      .then(settings => {
        dispatch({ type: SAVE_SETTINGS, settings: settings })
      })
      .catch(e => console.log(`error saving settings/getting api: ${e}`))
  }
}

export const startGame = () => ({ type: START_GAME })

export const saveGuess = (guessObject) => ({ type: SAVE_GUESS, guessObject: guessObject })

export const winGame = () => ({ type: WIN_GAME })

export const loseGame = () => ({ type: LOSE_GAME })

export const exitGame = () => ({ type: EXIT_GAME })

export const updateGuessesScore = (guessesLeft, score) => ({ type: UPDATE_GUESSES_SCORE, guessesLeft: guessesLeft, score: score })

export const toggleSound = () => {
  console.log(`sound offing`)
  return ({ type: TOGGLE_SOUND })
}
import axios from 'axios'

export const SAVE_SETTINGS = 'SAVE_SETTINGS'
export const START_GAME = 'START_GAME'
export const SAVE_GUESS = 'SAVE_GUESS'

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
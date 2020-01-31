export const SAVE_SETTINGS = 'SAVE_SETTINGS'
export const START_GAME = 'START_GAME'

export const saveSettings = (settings) => ({ type: SAVE_SETTINGS, settings: settings })

export const startGame = () => ({ type: START_GAME })

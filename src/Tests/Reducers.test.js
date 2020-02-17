import React from 'react'
import { expect } from 'chai'
import { reducer, initialState } from '../Reducers/Index'
import {
  SAVE_SETTINGS,
  START_GAME,
  SAVE_GUESS,
  WIN_GAME,
  LOSE_GAME,
  EXIT_GAME,
  UPDATE_GUESSES_SCORE,
  TOGGLE_SOUND,
  SAVE_TOP_SCORES
} from '../Actions/Index'

// to.eql compares objects with deep equality
// expect({ a: 1 }).to.equal({ a: 1 }); // fails
// expect({ a: 1 }).to.eql({ a: 1 }); // passes
describe('authenticate reducer', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).to.eql(initialState)
  })

  it('handles save settings', () => {
    const action = {
      type: SAVE_SETTINGS,
      settings: {
        username: 'player123',
        level: 'normal',
        rangeUpperLimit: 7,
        secretCode: 1234
      }
    }
    expect(reducer(initialState, action)).to.eql({
      ...initialState,
      username: action.settings.username,
      level: action.settings.level,
      rangeUpperLimit: action.settings.rangeUpperLimit,
      secretCode: action.settings.secretCode
    })
  })

  it('handles start game', () => {
    expect(reducer(initialState, { type: START_GAME })).to.eql({
      ...initialState,
      playing: true
    })
  })

  // it('handles save guess', () => {
  //   const state = {
  //     ...initialState,
  //     guesses: [{ 1: 2 }, { 2: 2 }],
  //   }
  //   expect(reducer(state, { type: SAVE_GUESS, guessObject: {} })).to.eql({
  //     ...state,
  //     guesses: state.guesses.push({}),
  //     guessesLeft: initialState.guessesLeft - 1
  //   })
  // })

  it('handles win game', () => {
    expect(reducer(initialState, { type: WIN_GAME })).to.eql({
      ...initialState,
      gameStatus: 'win',
      confetti: true
    })
  })

  it('handles lose game', () => {
    expect(reducer(initialState, { type: LOSE_GAME })).to.eql({
      ...initialState,
      gameStatus: 'lose'
    })
  })

  it('handles exit game', () => {
    expect(reducer(initialState, { type: EXIT_GAME })).to.eql({
      ...initialState
    })
  })

  it('handles update guesses score', () => {
    expect(reducer(initialState, {
      type: UPDATE_GUESSES_SCORE,
      guessesLeft: 2,
      score: 10
    })).to.eql({
      ...initialState,
      guessesLeft: 2,
      score: 10
    })
  })

  it('handles toggle sound', () => {
    expect(reducer(initialState, { type: TOGGLE_SOUND })).to.eql({
      ...initialState,
      allowSound: !initialState.allowSound
    })
  })

  it('handles save top scores', () => {
    expect(reducer(initialState, {
      type: SAVE_TOP_SCORES,
      topScores: 10
    })).to.eql({
      ...initialState,
      topScores: 10
    })
  })
})

/*
https://medium.com/building-ibotta/testing-arrays-and-objects-with-chai-js-4b372310fe6d

https://willowtreeapps.com/ideas/best-practices-for-unit-testing-with-a-react-redux-approach
*/
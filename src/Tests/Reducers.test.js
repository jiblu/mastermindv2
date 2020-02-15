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

  it('handles start game', () => {
    expect(reducer(initialState, { type: START_GAME })).to.eql({
      ...initialState,
      playing: true
    })
  })

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


})

/*
https://medium.com/building-ibotta/testing-arrays-and-objects-with-chai-js-4b372310fe6d

https://willowtreeapps.com/ideas/best-practices-for-unit-testing-with-a-react-redux-approach
*/
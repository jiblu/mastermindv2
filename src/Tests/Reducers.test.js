import React from 'react'
import { expect } from 'chai'
import { reducer, initialState } from '../Reducers/Index'

// to.eql compares objects with deep equality
// expect([1, 2, 3]).to.eql([1, 2, 3]) passes
describe('authenticate reducer', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).to.eql(initialState)
  })
})
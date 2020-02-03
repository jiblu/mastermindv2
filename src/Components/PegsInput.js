import React, { Component } from 'react'
import styled from 'styled-components'
import { Colors } from '../Constants/index'
import getPegColor from '../Helpers/getPegColor'
import Peg from './Peg'

const PegsDiv = styled.div`

`

class PegsInput extends Component {
  state = {
    pegValues: [1, undefined, undefined, undefined]
  }

  render () {
    return (
      this.state.pegValues.map((pegValue) => {
        return (
          <Peg
            color={getPegColor(pegValue)}
            edit={true}
          />
        )
      })
    )
  }
}

export default PegsInput
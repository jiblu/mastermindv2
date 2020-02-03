import React, { Component } from 'react'
import styled from 'styled-components'
import { Colors, PegColors } from '../Constants/index'
import Peg from './Peg'

const PegsDiv = styled.div`

`

const pegColor = (number) => {
  return number ? PegColors[number.toString()] : null
}

class PegsInput extends Component {
  state = {
    pegValues: [1, undefined, undefined, undefined]
  }

  render () {
    return (
      <div>
        {
          this.state.pegValues.map((pegValue) => {
            console.log(pegColor(pegValue))
            return <Peg color={pegColor(pegValue)} edit={true} />
          })
        }
      </div>
    )
  }
}

export default PegsInput
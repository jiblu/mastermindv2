import React, { Component } from 'react'
import styled from 'styled-components'
import { Colors, PegColors } from '../Constants/index'
import getPegColor from '../Helpers/getPegColor'
import Stack from './Stack'
import Peg from './Peg'

class PegsInput extends Component {
  state = {
    selectedPegId: null,
  }

  handleSelect (key) {
    this.setState({
      selectedPegId: key
    })
  }

  render () {
    let pegColors = Object.values(PegColors).slice(0, this.props.max)
    return (
      <Stack vertical margin='10px'>
        <Peg
          color={pegColors[this.state.selectedPegId]}
          selection
          edit={false}
        />
        {
          pegColors.map((color, i) => {
            return (
              <Peg
                color={color}
                key={i}
                id={i}
                edit={true}
                onClick={this.handleSelect.bind(this)}
              />
            )
          })
        }
      </Stack>
    )
  }
}

export default PegsInput
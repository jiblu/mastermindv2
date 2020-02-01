import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveSettings, startGame } from '../Actions/Index'
import styled from 'styled-components'
import { Colors, Metrics } from '../Themes/index'
import Stack from '../Components/Stack'
import Input from '../Components/Input'
import Text from '../Components/Text'
import Button from '../Components/Button'
import Dropdown from '../Components/Dropdown'
import { thisExpression } from '@babel/types'

const levels = ['normal', 'nightmare', 'hell']

class Settings extends Component {
  state = {
    username: 'guest',
    level: 'normal'
  }

  handleChange (id, e) {
    this.setState({
      [id]: e.target.value
    })
  }

  handleSubmit () {
    this.props.saveSettings(this.state)
      .then(() => this.props.startGame())
  }

  render () {
    return (
      <Stack vertical align='center'>
        <Stack align='center'>
          <Text size='medium' color='secondary'>Game Settings</Text>
        </Stack>
        <div style={{margin: '10px 20px'}}>
          <Input
            text='username'
            id='username'
            placeholder='leave blank for guest'
            onChange={ this.handleChange.bind(this) }
            />
          <Dropdown
            text='level'
            id='level'
            onChange={ this.handleChange.bind(this) }
            list={levels}
            />
        </div>
        <Button
          onClick={ this.handleSubmit.bind(this) }
        >
          New Game
        </Button>
      </Stack>
    )
  }
}

const mapStateToProps = state => {
  return {
    username: state.username,
    level: state.level
  }
}

const mapDispatchToProps = { saveSettings, startGame }

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
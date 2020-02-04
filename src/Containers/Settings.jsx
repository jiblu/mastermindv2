import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveSettings, startGame } from '../Actions/Index.js'
import styled from 'styled-components'
import { Colors, Metrics } from '../Constants/index.js'
import Stack from '../Components/Stack.jsx'
import Input from '../Components/Input.jsx'
import Text from '../Components/Text.jsx'
import Button from '../Components/Button.jsx'
import Dropdown from '../Components/Dropdown.jsx'

const levels = ['normal', 'nightmare', 'hell']

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'guest',
      level: 'normal'
    }
    
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  // state = {
  //   username: 'guest',
  //   level: 'normal'
  // }

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
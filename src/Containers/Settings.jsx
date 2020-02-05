import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveSettings, startGame, toggleSound } from '../Actions/Index.js'
import Stack from '../Components/Stack.jsx'
import Input from '../Components/Input.jsx'
import Text from '../Components/Text.jsx'
import Button from '../Components/Button.jsx'
import Dropdown from '../Components/Dropdown.jsx'
import Toggle from '../Components/Toggle.jsx'

const levels = ['normal', 'nightmare', 'hell']

class Settings extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: 'guest',
      level: 'normal'
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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
        <div style={{ margin: '10px' }}>
          <Input
            text='username'
            id='username'
            placeholder='leave blank for guest'
            onChange={this.handleChange.bind(this)}
          />
          <Dropdown
            text='level'
            id='level'
            onChange={this.handleChange.bind(this)}
            list={levels}
          />
          <Toggle
            text='sound'
            onClick={this.props.toggleSound}
          />
        </div>
        <Button
          onClick={this.handleSubmit.bind(this)}
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

const mapDispatchToProps = { saveSettings, startGame, toggleSound }

export default connect(mapStateToProps, mapDispatchToProps)(Settings)

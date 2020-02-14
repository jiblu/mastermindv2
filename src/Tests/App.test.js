import React from 'react'
import { shallow, mount, render } from '../enzyme.js'
import sinon from 'sinon'
import { expect } from 'chai'

import App from '../Containers/App'

describe('<App />', () => {
  it('simulates click events', () => {
    const onButtonClick = sinon.spy()

  })
    // it('should have a button to submit the form', function () {
  //   const wrapper = shallow(<App />) // highlight
  //   expect(wrapper.find('button')).to.have.length(1)
  // })

  // it('should have props for model, label and type', function () {
  //   const wrapper = shallow(<LoginForm/>)
  //   expect(wrapper.props().model).to.be.defined
  //   expect(wrapper.props().label).to.be.defined
  //   expect(wrapper.props().type).to.be.defined
  // })
  it('contains an <RulesModal /> component', function () {
    const wrapper = shallow(<App />)
    expect(wrapper.find('RulesModal')).to.have.length(1)
  })
  // it('contains an <RulesModal /> component', function () {
  //   const wrapper = mount(<App />)
  //   expect(wrapper.find(RulesModal)).to.have.length(1)
  // })
})
/*
https://blog.logrocket.com/getting-started-with-enzyme-for-react-a106b58fc53b/
*/

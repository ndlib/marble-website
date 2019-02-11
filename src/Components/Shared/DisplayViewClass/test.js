import React from 'react'
import { shallow } from 'enzyme'
import DisplayViewClass from './'

const reducer = { view: 'displayView' }
const children = (<React.Fragment>children</React.Fragment>)
const wrapper = shallow(<DisplayViewClass reducer={reducer}>{children}</DisplayViewClass>)

test('Render children wrapped in a class derived from reducer.view', () => {
  expect(wrapper.find('.displayView').exists()).toBeTruthy()
  expect(wrapper.find('.displayView').text()).toEqual('children')
})

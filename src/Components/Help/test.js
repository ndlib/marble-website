import React from 'react'
import { shallow } from 'enzyme'
import Help from './'
import Sidebar from 'Components/Shared/Sidebar'
import HelpText from './HelpText'

const wrapper = shallow(<Help />)

test('Renders a div with Sidebar and HelpText componets', () => {
  expect(wrapper.find('.helpTopics').exists()).toBeTruthy()
  expect(wrapper.find(Sidebar).exists()).toBeTruthy()
  expect(wrapper.find(HelpText).exists()).toBeTruthy()
})

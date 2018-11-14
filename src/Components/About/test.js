import React from 'react'
import { shallow } from 'enzyme'
import About from './'
import Sidebar from 'Components/Shared/Sidebar'
import AboutMain from './AboutMain'

const wrapper = shallow(<About />)

test('Renders a div with Sidebar and AboutMain componets', () => {
  expect(wrapper.find('.aboutContent').exists()).toBeTruthy()
  expect(wrapper.find(Sidebar).exists()).toBeTruthy()
  expect(wrapper.find(AboutMain).exists()).toBeTruthy()
})

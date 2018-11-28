import React from 'react'
import { shallow } from 'enzyme'
import About from './'
import ContentLeftSidebar from 'Components/Layouts/ContentLeftSidebar'
import AboutMain from './AboutMain'

const wrapper = shallow(<About />)

test('Renders a div with Sidebar and AboutMain componets', () => {
  expect(wrapper.find(ContentLeftSidebar).exists()).toBeTruthy()
  expect(wrapper.find(AboutMain).exists()).toBeTruthy()
})

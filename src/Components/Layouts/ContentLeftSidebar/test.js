import React from 'react'
import { shallow } from 'enzyme'
import ContentLeftSidebar from './'
import Sidebar from './Sidebar'
import MainSide from './MainSide'
const wrapper = shallow(<ContentLeftSidebar className='testClass' sidebarContent={''}><div>Some Content</div></ContentLeftSidebar>)

test('It renders a Sidebar and MainSide', () => {
  expect(wrapper.find(Sidebar).exists()).toBeTruthy()
  expect(wrapper.find(MainSide).exists()).toBeTruthy()
  expect(wrapper.find('.contentLeftSidebar').exists()).toBeTruthy()
  expect(wrapper.find('.testClass').exists()).toBeTruthy()
})

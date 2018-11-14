import React from 'react'
import { shallow } from 'enzyme'
import NavBar from './'
import SiteLogo from './SiteLogo'
import Hamburger from './Hamburger'

test('NavBar renders some divs and other react components', () => {
  const wrapper = shallow(<NavBar />)
  expect(wrapper.find('.navBar').exists()).toBeTruthy()
  expect(wrapper.find('.navBarInner').exists()).toBeTruthy()
  expect(wrapper.find('.LoginButton').exists()).toBeTruthy()
  expect(wrapper.find(SiteLogo).exists()).toBeTruthy()
  expect(wrapper.find(Hamburger).exists()).toBeTruthy()
})

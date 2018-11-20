import React from 'react'
import { shallow } from 'enzyme'
import { Hamburger } from './'
import NavigationLinks from './NavigationLinks'

let wrapper

test('Hamburger contains a NavigationLinks component and is closed', () => {
  wrapper = shallow(<Hamburger open={false} dispatch={() => {}} />)
  expect(wrapper.find(NavigationLinks).exists()).toBeTruthy()
  expect(wrapper.find('.closed').exists()).toBeTruthy()
})

test('Hamburger contains a NavigationLinks component and is open', () => {
  wrapper = shallow(<Hamburger open dispatch={() => {}} />)
  expect(wrapper.find(NavigationLinks).exists()).toBeTruthy()
  expect(wrapper.find('.open').exists()).toBeTruthy()
})

import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import Hamburger from './'
import NavigationLinks from './NavigationLinks'

const mountWithRouter = node => mount(<MemoryRouter>{node}</MemoryRouter>)

let wrapper

beforeEach(() => {
  wrapper = mountWithRouter(<Hamburger />)
})

test('Hamburger contains a NavigationLinks component', () => {
  expect(wrapper.find(NavigationLinks).exists()).toBeTruthy()
})

test('Clicking on the hamburger icon opens and closes the menu', () => {
  expect(wrapper.find('#hamburgerClickable').exists()).toBeTruthy()
  expect(wrapper.find('.hamburger.closed').exists()).toBeTruthy()
  wrapper.find('#hamburgerClickable').simulate('click')
  expect(wrapper.find('.hamburger.open').exists()).toBeTruthy()
  wrapper.find('#hamburgerClickable').simulate('click')
  expect(wrapper.find('.hamburger.closed').exists()).toBeTruthy()
})

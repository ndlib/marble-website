import React from 'react'
import { shallow } from 'enzyme'
import { Hamburger } from './'
import NavigationLinks from './NavigationLinks'

let wrapper
const dispatch = jest.fn()
test('Hamburger contains a NavigationLinks component and is closed', () => {
  wrapper = shallow(<Hamburger open={false} dispatch={dispatch} />)
  expect(wrapper.find(NavigationLinks).exists()).toBeTruthy()
  expect(wrapper.find('.closed').exists()).toBeTruthy()
})

test('Hamburger contains a NavigationLinks component and is open', () => {
  wrapper = shallow(<Hamburger open dispatch={dispatch} />)
  expect(wrapper.find(NavigationLinks).exists()).toBeTruthy()
  expect(wrapper.find('.open').exists()).toBeTruthy()
})

test('Acton is called on click', () => {
  wrapper = shallow(<Hamburger open dispatch={dispatch} />)
  wrapper.find('#hamburgerClickable').simulate('click')
  expect(dispatch).toHaveBeenCalled()
})

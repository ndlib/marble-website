import React from 'react'
import Select from 'react-select'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { mount } from 'enzyme'
import {
  PerPage,
  handleChange
 } from './'
import { createMemoryHistory } from 'history'

const history = createMemoryHistory('/search')
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const dispatch = jest.fn()
const store  = mockStore({})
const wrapper = mount(<PerPage />)

test('PerPage has React Select', () => {
  expect(wrapper.find('Select').exists()).toBeTruthy()
})

test('PerPage dispatches handleChange with updated values', () => {
  let change = dispatch(handleChange('this', 'terms', history, dispatch))
  expect(dispatch).toHaveBeenCalled()
})

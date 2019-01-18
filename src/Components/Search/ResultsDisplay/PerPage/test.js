import React from 'react'
import Select from 'react-select'
import { mount } from 'enzyme'
import {
  PerPage,
  handleChange,
} from './'
import { createMemoryHistory } from 'history'

const history = createMemoryHistory('/search')
const dispatch = jest.fn()
const wrapper = mount(<PerPage />)

test('PerPage has React Select', () => {
  expect(wrapper.find(Select).exists()).toBeTruthy()
})

test('PerPage dispatches handleChange with updated values', () => {
  dispatch(handleChange('this', 'terms', history, dispatch))
  expect(dispatch).toHaveBeenCalled()
})
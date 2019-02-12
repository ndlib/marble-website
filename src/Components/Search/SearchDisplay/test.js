import React from 'react'
import { shallow } from 'enzyme'
import { SearchDisplay } from './'
import Results from './Results'
import PerPage from './PerPage'
import PageNum from './PageNum'
import DisplayViewToggle from 'Components/Shared/DisplayViewToggle'

const searchReducer = {}

test('Renders null for no search', () => {
  const location = {}
  const wrapper = shallow(<SearchDisplay location={location} searchReducer={searchReducer} />)
  expect(wrapper.type()).toEqual(null)
})

test('Renders expect child components', () => {
  const location = {
    search: 'something',
  }
  const wrapper = shallow(<SearchDisplay location={location} searchReducer={searchReducer} />)
  expect(wrapper.find(DisplayViewToggle)).toBeTruthy()
  expect(wrapper.find(PerPage)).toBeTruthy()
  expect(wrapper.find(Results)).toBeTruthy()
  expect(wrapper.find(PageNum).length).toEqual(2)
})

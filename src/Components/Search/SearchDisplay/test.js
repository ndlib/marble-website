import React from 'react'
import { shallow } from 'enzyme'
import { SearchDisplay } from './'
import Results from './Results'
import PerPage from './PerPage'
import PageNum from './PageNum'
import ResultsView from './ResultsView'

test('Renders null for no search', () => {
  const location = {}
  const wrapper = shallow(<SearchDisplay location={location} />)
  expect(wrapper.type()).toEqual(null)
})

test('Renders expect child components', () => {
  const location = {
    search: 'something',
  }
  const wrapper = shallow(<SearchDisplay location={location} />)
  expect(wrapper.find(ResultsView)).toBeTruthy()
  expect(wrapper.find(PerPage)).toBeTruthy()
  expect(wrapper.find(Results)).toBeTruthy()
  expect(wrapper.find(PageNum).length).toEqual(2)
})

import React from 'react'
import { shallow } from 'enzyme'
import SearchBox, { submitSearch } from './'
import SearchButton from './SearchButton'
import SearchField from './SearchField'
import searchUrl from 'Functions/searchUrl'

test('Push the right thing onto the history', () => {
  const history = []
  const newHistory = submitSearch(history, 'abc', 1, 'view')
  expect(newHistory).toEqual([searchUrl('abc', 1, 1, 'view')])
})

test('renders the expected classes and subcomponents', () => {
  const wrapper = shallow(<SearchBox />)
  expect(wrapper.find('.searchComponent').exists()).toBeTruthy()
  expect(wrapper.find('.searchBox').exists()).toBeTruthy()
  expect(wrapper.find(SearchButton).exists()).toBeTruthy()
  expect(wrapper.find(SearchField).exists()).toBeTruthy()
})

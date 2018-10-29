
import React from 'react'
import { shallow } from 'enzyme'
import { SearchComponent } from './'

test('SearchComponent Renders a form ', () => {
  const sc = shallow(<SearchComponent />)
  expect(sc.find('form').exists()).toBeTruthy()
})

test('Search Component has an input', () => {})
test('Search Component has an button', () => {})
test('Search Box dispatches the searchAction#submitSearch funtion with the value of the input field', () => {})

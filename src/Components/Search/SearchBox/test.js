
import React from 'react'
import { shallow } from 'enzyme'
import { SearchBox } from './'

test('SearchComponent Renders a form ', () => {
  const sc = shallow(<SearchBox />)
  expect(sc.find('form').exists()).toBeTruthy()
})

test('Search Component has an input', () => {
  const sc = shallow(<SearchBox />)
  expect(sc.find('input').exists()).toBeTruthy()
})

test('Search Component has an button', () => {
  const sc = shallow(<SearchBox />)
  expect(sc.find('button').exists()).toBeTruthy()
})

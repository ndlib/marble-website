
import React from 'react'
import { mount } from 'enzyme'
import SearchBox from './'
import configureStore from 'redux-mock-store'
const mockStore = configureStore()

let store, wrapper

beforeEach(() => {
  store = mockStore({})
  wrapper = mount(<SearchBox store={store} />)
})

test('SearchComponent Renders a form ', () => {
  expect(wrapper.find('form').exists()).toBeTruthy()
})

test('Search Component has an input', () => {})
test('Search Component has an button', () => {})
test('Search Box dispatches the searchAction#submitSearch funtion with the value of the input field', () => {})

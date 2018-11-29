import React from 'react'
import { mount } from 'enzyme'
import { SearchBox } from './'
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

test('Search Component has an input', () => {
  expect(wrapper.find('input').exists()).toBeTruthy()
})

test('Search Component has an button', () => {
  expect(wrapper.find('button').exists()).toBeTruthy()
})

// test('Search Box dispatches the searchAction#submitSearch function with the value of the input field', () => {
//   const { store, invoke } = create()
//   invoke((dispatch, getState) => {
//     dispatch('TEST DISPATCH')
//     getState()
//   })
//   expect(store.dispatch).toHaveBeenCalledWith('TEST DISPATCH')
// })

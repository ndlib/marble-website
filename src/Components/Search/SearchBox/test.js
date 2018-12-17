import React from 'react'
import { createMemoryHistory } from 'history'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { mount } from 'enzyme'
import { SearchBox } from './'
import configureStore from 'redux-mock-store'

const history = createMemoryHistory('/search')
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const dispatch = jest.fn()
const store = mockStore({})

let wrapper

beforeEach(() => {
  store.clearActions()
  wrapper = mount(<SearchBox store={store} history={history} />)
})

test('Search component contains a form, an input, and a button', () => {
  expect(wrapper.find('form').exists()).toBeTruthy()
  expect(wrapper.find('input').exists()).toBeTruthy()
  expect(wrapper.find('button').exists()).toBeTruthy()
})

test('Search Box dispatches the searchAction#submitSearch function with the value of the input field', () => {
  wrapper.find('input').simulate('change', { target: { value: 'test' }})
  wrapper.find('form').simulate('submit', { e: wrapper.find('button').at(0), dispatch: dispatch })
  expect(dispatch).toHaveBeenCalled()
})

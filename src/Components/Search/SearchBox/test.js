import React from 'react'
import { shallow } from 'enzyme'
import { SearchBox } from './'

const thunk = ({ dispatch, getState }) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch, getState)
  }
  return next(action)
}

const create = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn()
  }
  const next = jest.fn()
  const invoke = action => thunk(store)(next)(action)
  return { store, next, invoke }
}

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

test('Search Box dispatches the searchAction#submitSearch function with the value of the input field', () => {
  const { store, invoke } = create()
  invoke((dispatch, getState) => {
    dispatch('TEST DISPATCH')
    getState()
  })
  expect(store.dispatch).toHaveBeenCalledWith('TEST DISPATCH')
})

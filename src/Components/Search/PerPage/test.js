import React from 'react'
import { shallow } from 'enzyme'
import { PerPage } from './'
import Select from 'react-select'

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

test('PerPage has React Select', () => {
  const sc = shallow(<PerPage />)
  expect(sc.find(Select).exists()).toBeTruthy()
})

test('PerPage dispatches with value', () => {
  const { store, invoke } = create()
  invoke((dispatch, getState) => {
    dispatch('TEST DISPATCH')
    getState()
  })
  expect(store.dispatch).toHaveBeenCalledWith('TEST DISPATCH')
})

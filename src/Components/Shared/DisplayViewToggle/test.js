import React from 'react'
import { shallow } from 'enzyme'
import {
  DisplayViewToggle,
  getActions,
  getClasses,
  mapStateToProps,
} from './'

test('DisplayViewToggle renders', () => {
  const reducer = {}
  const dispatch = jest.fn()
  const wrapper = shallow(<DisplayViewToggle reducer={reducer} dispatch={dispatch} />)
  expect(wrapper.find('.displayViewToggle').exists()).toBeTruthy()
  expect(wrapper.find('input').length).toEqual(2)
})

describe('Testing clicks on DisplayViewToggle', () => {
  const reducer = {}
  const dispatch = jest.fn()
  const wrapper = shallow(<DisplayViewToggle reducer={reducer} dispatch={dispatch} />)
  test('list click', () => {
    wrapper.find('input').at(0).simulate('click')
    expect(dispatch).toHaveBeenCalled()
  })
  test('grid click', () => {
    wrapper.find('input').at(1).simulate('click')
    expect(dispatch).toHaveBeenCalled()
  })
})

describe('getAction returns expected results', () => {
  test('manifestReducer', () => {
    const actions = getActions({ manifests: {} })
    expect(actions.getManifest).toBeTruthy()
    expect(actions.viewChange).toBeTruthy()
  })
  test('searchReducer', () => {
    const actions = getActions({})
    expect(actions.getManifest).toBeFalsy()
    expect(actions.viewChange).toBeTruthy()
  })
})

describe('getClasses returns expected results', () => {
  test('grid', () => {
    const classes = getClasses('grid')
    expect(classes).toEqual({ grid: 'selected', list: 'other' })
  })
  test('list', () => {
    const classes = getClasses('list')
    expect(classes).toEqual({ grid: 'other', list: 'selected' })
  })
})

test('mapStateToProps', () => {
  const state = { state: 'props' }
  const stateProps = mapStateToProps(state)
  expect(stateProps).toEqual(state)
})

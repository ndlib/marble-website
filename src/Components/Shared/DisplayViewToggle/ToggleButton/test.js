import React from 'react'
import { shallow } from 'enzyme'
import {
  ToggleButton,
  getActions,
  getClasses,
  mapStateToProps,
} from './'

test('ToggleButton renders', () => {
  const reducer = {}
  const dispatch = jest.fn()
  const wrapper = shallow(<ToggleButton reducer={reducer} dispatch={dispatch} icon='icon.svg' option='list' />)
  expect(wrapper.find('input').exists()).toBeTruthy()
  wrapper.find('input').simulate('click')
  expect(dispatch).toHaveBeenCalled()
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

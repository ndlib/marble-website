import React from 'react'
import { shallow } from 'enzyme'
import { SearchField } from './'

const history = {}
const searchReducer = {}
const dispatch = jest.fn()
const action = jest.fn()
const wrapper = shallow(
  <SearchField
    history={history}
    searchReducer={searchReducer}
    dispatch={dispatch}
    submitSearch={action}
  />
)

test('key down - not enter key', () => {
  wrapper.find('.searchbar').simulate('keyDown', { keyCode: 42 })
  expect(action).not.toHaveBeenCalled()
})

test('key down - enter key', () => {
  wrapper.find('.searchbar').simulate('keyDown', { keyCode: 13 })
  expect(action).toHaveBeenCalled()
})

test('test onChange event', () => {
  wrapper.find('.searchbar').simulate('change', { target: { value: 'xyz' } })
  expect(dispatch).toHaveBeenCalled()
})

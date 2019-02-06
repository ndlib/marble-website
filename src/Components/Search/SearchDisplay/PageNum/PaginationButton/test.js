import React from 'react'
import { shallow } from 'enzyme'
import { Link } from 'react-router-dom'
import { PaginationButton, getSettings, mapStateToProps } from './'

test('getSettings prev', () => {
  const result = getSettings(true, 5)
  expect(result).toEqual({ label: '<', targetPage: 4 })
})

test('getSettings next', () => {
  const result = getSettings(false, 5)
  expect(result).toEqual({ label: '>', targetPage: 6 })
})

test('Renders for !prev && nextpage', () => {
  const searchReducer = {
    perpage: 2,
    terms: 'a b c',
    view: 'view',
    nextpage: true,
  }
  const wrapper = shallow(<PaginationButton currentPage={1} searchReducer={searchReducer} />)
  expect(wrapper.find(Link).exists()).toBeTruthy()
})
test('Renders for prev && currentPage > 1', () => {
  const searchReducer = {
    perpage: 2,
    terms: 'a b c',
    view: 'view',
  }
  const wrapper = shallow(<PaginationButton currentPage={2} searchReducer={searchReducer} prev />)
  expect(wrapper.find(Link).exists()).toBeTruthy()
})
test('Renders null otherwise', () => {
  const searchReducer = {
    perpage: 2,
    terms: 'a b c',
    view: 'view',
  }
  const wrapper = shallow(<PaginationButton currentPage={1} searchReducer={searchReducer} prev />)
  expect(wrapper.find(Link).exists()).toBeFalsy()
})

test('mapStateToProps', () => {
  const state = { state: 'props' }
  const stateProps = mapStateToProps(state)
  expect(stateProps).toEqual(state)
})

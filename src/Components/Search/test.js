import React from 'react'
import { shallow } from 'enzyme'
import { Search, mergeProps } from './'
import SearchDisplay from './SearchDisplay'
import Loading from 'Components/Shared/Loading'
import NotFound from 'Components/Shared/NotFound'
import {
  STATUS_SEARCH_EMPTY,
  STATUS_SEARCH_FETCHING,
  STATUS_SEARCH_READY,
  STATUS_SEARCH_ERROR,
} from 'Store/actions/searchActions'

test('Renders null for STATUS_SEARCH_EMPTY', () => {
  const searchReducer = { status: STATUS_SEARCH_EMPTY }
  const wrapper = shallow(<Search searchReducer={searchReducer} />)
  expect(wrapper.type()).toEqual(null)
})

test('Renders SearchDisplay for XSTATUS_SEARCH_READY', () => {
  const searchReducer = { status: STATUS_SEARCH_READY }
  const wrapper = shallow(<Search searchReducer={searchReducer} />)
  expect(wrapper.find(SearchDisplay).exists()).toBeTruthy()
})

test('Renders NotFound for STATUS_SEARCH_ERROR', () => {
  const searchReducer = { status: STATUS_SEARCH_ERROR }
  const wrapper = shallow(<Search searchReducer={searchReducer} />)
  expect(wrapper.find(NotFound).exists()).toBeTruthy()
})

test('Renders Loading for STATUS_SEARCH_FETCHING', () => {
  const searchReducer = { status: STATUS_SEARCH_FETCHING }
  const wrapper = shallow(<Search searchReducer={searchReducer} />)
  expect(wrapper.find(Loading).exists()).toBeTruthy()
})

test('mergeProps should dispatch when it needs to', () => {
  const stateProps = {
    status: STATUS_SEARCH_READY,
    searchReducer: {
      page: 1,
    },
  }
  const dispatchProps = { dispatch: jest.fn() }
  const ownProps = {
    location: {
      search: '?terms=abc&page=1&perpage=10',
    },
  }
  const dispatchSpy = jest.spyOn(dispatchProps, 'dispatch')
  mergeProps(stateProps, dispatchProps, ownProps)
  expect(dispatchSpy).toHaveBeenCalled()
})

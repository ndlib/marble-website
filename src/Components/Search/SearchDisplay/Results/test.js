import React from 'react'
import { shallow } from 'enzyme'
import { Results } from './'
import Result from './Result'
import Loading from 'Components/Shared/Loading'
import NotFound from 'Components/Shared/NotFound'
import { STATUS_SEARCH_READY } from 'Store/actions/searchActions'

test('test status loading', () => {
  const searchReducer = { status: 'SOME_OTHER_STATUS' }
  const wrapper = shallow(<Results searchReducer={searchReducer} />)
  expect(wrapper.find(Loading).exists()).toBeTruthy()
})

test('test no results', () => {
  const searchReducer = { status: STATUS_SEARCH_READY }
  const wrapper = shallow(<Results searchReducer={searchReducer} />)
  expect(wrapper.find(NotFound).exists()).toBeTruthy()
})

test('test no results', () => {
  const searchReducer = {
    status: STATUS_SEARCH_READY,
    results: {
      docs: [ { a: 'result' }, { b: 'result' } ],
    },
  }
  const wrapper = shallow(<Results searchReducer={searchReducer} />)
  expect(wrapper.find(Result).length).toEqual(2)
})

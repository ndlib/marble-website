import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import { PRIMO_BASE_URL } from 'Configurations/apis'

import {
  SUBMIT_SEARCH,
  RESULTS_READY,
  CLEAR_SEARCH,
  PAGE_CHANGE,
  updatePage,
  submitSearch,
  startSearch,
  clearSearch,
  returnResults,
  pageChange,
  searchCriteria,
} from 'Store/actions/searchActions'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const dispatch = jest.fn()
const store  = mockStore({})

beforeEach(() => {
  store.clearActions()
})

test('startSearch dispatches the correct payload', () => {
  expect(startSearch('terms', 1)).toEqual({ type: SUBMIT_SEARCH, terms: 'terms', page: 1 })
})

test('returnResults dispatches the correct payload', () => {
  expect(returnResults('results', false)).toEqual({ type: RESULTS_READY, results: 'results', nextpage: false })
})

test('clearSearch dispatches the correct payload', () => {
  expect(clearSearch()).toEqual({ page: 1, type: CLEAR_SEARCH, terms: '', results: [] })
})

test('pageChange dispatches the correct payload', () => {
  expect(pageChange(20, 2)).toEqual({ type: PAGE_CHANGE, perpage: 20, page: 2 })
})

test('updatePage dispatches', () => {
  store.dispatch(updatePage(20, 'terms', 2))
  const expectedActions = [{type: PAGE_CHANGE, perpage: 20, page: 2 },
      { type: SUBMIT_SEARCH, terms: 'terms', page: 2 }]
  expect(store.getActions()).toEqual(expectedActions)
})

test('docs length is greater than results', () => {
  let url = encodeURI(PRIMO_BASE_URL + searchCriteria + '&q=any,conains,terms&limit=4&offset=0')
  const expectedActions = [{type: SUBMIT_SEARCH, terms: 'terms', page: 1}, {type: 'RESULTS_READY', nextpage: true, results: {docs: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']}}]
  fetchMock.get('*', {
    docs:['a','b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']
  }).catch()
  return store.dispatch(submitSearch('','terms', '')).then(() => {
    expect (store.getActions()).toEqual(expectedActions)
  }
)
})

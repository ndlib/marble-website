import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

import {
  SUBMIT_SEARCH,
  RESULTS_READY,
  RESULTS_ERROR,
  CLEAR_SEARCH,
  VIEW_CHANGE,
  submitSearch,
  buildSearchUrl,
  startSearch,
  clearSearch,
  returnResults,
  returnError,
  viewChange,
  searchCriteria,
} from 'Store/actions/searchActions'
import { PRIMO_BASE_URL } from 'Configurations/apis'
import { defaultState } from '../../reducers/searchReducer'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

test('startSearch dispatches the correct payload', () => {
  expect(startSearch('terms', 1)).toEqual({ type: SUBMIT_SEARCH, terms: 'terms', page: 1 })
})

test('returnResults dispatches the correct payload', () => {
  expect(returnResults('results', false)).toEqual({ type: RESULTS_READY, results: 'results', nextpage: false })
})

test('clearSearch dispatches the correct payload', () => {
  expect(clearSearch()).toEqual({ page: 1, type: CLEAR_SEARCH, terms: '', results: [], view: 'list' })
})

test('viewChange dispatches the correct payload', () => {
  expect(viewChange('grid')).toEqual({ type: VIEW_CHANGE, view: 'grid' })
})

test('return dispatches the correct payload', () => {
  expect(returnError('i am error')).toEqual({ type: RESULTS_ERROR, error: 'i am error' })
})

describe('Test submitSearch', () => {
  test('buildSearchUrl', () => {
    const terms = 'a b c'
    const builtURL = buildSearchUrl(5, terms, 2)
    const expectedURL = encodeURI(`${PRIMO_BASE_URL}${searchCriteria}&q=any,contains,${terms}&limit=${6}&offset=${5}`)
    expect(builtURL).toEqual(expectedURL)
  })

  test('submitSearch no nextpage', () => {
    const store = mockStore({ ...defaultState })
    fetchMock.get(buildSearchUrl(4, 'a b c', 3), { docs: [1, 2, 3] })
    const expectedActions = [
      { type: 'SUBMIT_SEARCH', page: 3, perpage: 4, terms: 'a b c' },
      { type: 'RESULTS_READY', results: { docs: [1, 2, 3] }, nextpage: false },
    ]

    return store.dispatch(submitSearch(4, 'a b c', 3)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  test('submitSearch with nextpage', () => {
    const store = mockStore({ ...defaultState })
    fetchMock.get(buildSearchUrl(2, 'a b c', 1), { docs: [1, 2, 3] })
    const expectedActions = [
      { type: SUBMIT_SEARCH, page: 1, perpage: 2, terms: 'a b c' },
      { type: RESULTS_READY, results: { docs: [1, 2] }, nextpage: true },
    ]

    return store.dispatch(submitSearch(2, 'a b c', 1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  test('submitSearch with error', () => {
    console.error = jest.fn()
    const store = mockStore({ ...defaultState })
    fetchMock.get(buildSearchUrl(1, 'error', 1), { throws: new Error('i am error'),
    })
    const expectedActions = [
      { type: SUBMIT_SEARCH, page: 1, perpage: 1, terms: 'error' },
      { type: RESULTS_ERROR, error: new Error('i am error') },
    ]

    return store.dispatch(submitSearch(1, 'error', 1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})

// Reducer to be tested
import searchReducer, { defaultState } from './'
import {
  SUBMIT_SEARCH,
  RESULTS_READY,
  RESULTS_ERROR,
  CLEAR_SEARCH,
  SEARCH_VIEW_CHANGE,
  UPDATE_INPUT,
  STATUS_SEARCH_FETCHING,
  STATUS_SEARCH_READY,
  STATUS_SEARCH_ERROR,
} from 'Store/actions/searchActions'

describe('SUBMIT_SEARCH', () => {
  test('base test', () => {
    const action = {
      type: SUBMIT_SEARCH,
      terms: 'terms',
      page: 2,
      perpage: 5,

    }
    const testState = {
      ...defaultState,
      results: [],
      status: STATUS_SEARCH_FETCHING,
      rawInput: 'terms',
      terms: 'terms',
      page: 2,
      perpage: 5,
    }

    expect(searchReducer(undefined, action)).toEqual(testState)
  })
})

describe('RESULTS_READY reducer', () => {
  test('base test', () => {
    const action = { type: RESULTS_READY, results: 'results' }
    const testState = { ...defaultState, results: 'results', status: STATUS_SEARCH_READY }

    expect(searchReducer(undefined, action)).toEqual(testState)
  })

  test('allows nil results value', () => {
    const action = { type: RESULTS_READY }
    const testState = { ...defaultState, nextpage: undefined, results: undefined, status: STATUS_SEARCH_READY, terms: null }

    expect(searchReducer(undefined, action)).toEqual(testState)
  })
})

describe('CLEAR_SEARCH reducer', () => {
  test('base test', () => {
    const action = { type: CLEAR_SEARCH }

    expect(searchReducer(undefined, action)).toEqual(defaultState)
  })
})

test('view change', () => {
  const action = { type: SEARCH_VIEW_CHANGE, view: 'newView' }
  const testState = { ...defaultState, view: 'newView' }
  expect(searchReducer(undefined, action)).toEqual(testState)
})

test('update input', () => {
  const action = { type: UPDATE_INPUT, rawInput: 'xyz' }
  const testState = { ...defaultState, rawInput: 'xyz' }
  expect(searchReducer(undefined, action)).toEqual(testState)
})

test('RESULTS_ERROR', () => {
  const action = { type: RESULTS_ERROR, error: 'i am error' }
  const testState = { ...defaultState, results: [], error: 'i am error', status: STATUS_SEARCH_ERROR }
  expect(searchReducer(undefined, action)).toEqual(testState)
})

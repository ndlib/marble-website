import configureStore from 'redux-mock-store'
import * as searchActions from './searchActions'

const mockStore = configureStore()
const store = mockStore()

describe('searchActions', () => {
  beforeEach(() => { // Runs before each test in the suite
    store.clearActions()
  })

  test('startSearch dispatches the correct payload', () => {
    const expected = {
      type: searchActions.SUBMIT_SEARCH,
      terms: 'terms',
    }

    store.dispatch(searchActions.startSearch('terms'))
    expect(store.getActions()[0]).toEqual(expected)
  })

  test('returnSearch dispatches the correct payload', () => {
    const expected = {
      type: searchActions.RESULTS_READY,
      results: 'results',
    }

    store.dispatch(searchActions.returnResults('results'))
    expect(store.getActions()[0]).toEqual(expected)
  })

  test('clearSearch dispatches the correct payload', () => {
    const expected = {
      page: 1,
      type: searchActions.CLEAR_SEARCH,
      terms: '',
      results: [],
    }

    store.dispatch(searchActions.clearSearch())
    expect(store.getActions()[0]).toEqual(expected)
  })
})

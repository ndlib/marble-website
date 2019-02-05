import {
  SUBMIT_SEARCH,
  RESULTS_READY,
  RESULTS_ERROR,
  UPDATE_INPUT,
  CLEAR_SEARCH,
  VIEW_CHANGE,
  STATUS_SEARCH_FETCHING,
  STATUS_SEARCH_READY,
  STATUS_SEARCH_ERROR,
  STATUS_SEARCH_EMPTY,
} from 'Store/actions/searchActions'

export default(state = {
  status: STATUS_SEARCH_EMPTY,
  results: [],
  rawInput: '',
  terms: null,
  page: null,
  perpage: 12,
  view: 'list',
}, action) => {
  switch (action.type) {
    case SUBMIT_SEARCH:
      return {
        ...state,
        status: STATUS_SEARCH_FETCHING,
        page: action.page,
        perpage: action.perpage,
        rawInput: action.terms,
        terms: action.terms,
        searching: true,
        results: [],
      }
    case RESULTS_READY:
      return {
        ...state,
        status: STATUS_SEARCH_READY,
        results: action.results,
        nextpage: action.nextpage,
      }
    case RESULTS_ERROR:
      return {
        ...state,
        status: STATUS_SEARCH_ERROR,
        results: {},
        error: action.error,
      }
    case UPDATE_INPUT:
      return {
        ...state,
        rawInput: action.rawInput,
      }
    case CLEAR_SEARCH:
      return {
        ...state,
        status: STATUS_SEARCH_EMPTY,
        terms: [],
        results: [],
        nextpage: false,
        page: 1,
      }
    case VIEW_CHANGE:
      return {
        ...state,
        view: action.view,
      }

    default:
      return state
  }
}

import {
  SUBMIT_SEARCH,
  RESULTS_READY,
  CLEAR_SEARCH,
  PAGE_CHANGE,
} from '../actions/searchActions'

export default(state = {}, action) => {
  switch (action.type) {
    case SUBMIT_SEARCH:
      return {
        ...state,
        terms: action.terms,
        searching: true,
        results: [],
      }
    case RESULTS_READY:
      return {
        ...state,
        searching: false,
        results: action.results,
        nextpage: action.nextpage,
      }
    case CLEAR_SEARCH:
      return {
        ...state,
        terms: [],
        searching: false,
        results: [],
        nextpage: false,
        page: 1,
      }
    case PAGE_CHANGE:
      return {
        ...state,
        perpage: action.perpage,
        page: action.page,
      }

    default:
      return state
  }
}

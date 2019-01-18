import {
  SUBMIT_SEARCH,
  RESULTS_READY,
  CLEAR_SEARCH,
  PAGE_CHANGE,
  VIEW_CHANGE,
} from 'Store/actions/searchActions'

export default(state = {
  searching: false,
  results: [],
  terms: null,
  page: 1,
  perpage: 12,
}, action) => {
  switch (action.type) {
    case SUBMIT_SEARCH:
      return {
        ...state,
        page: action.page,
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
    case VIEW_CHANGE:
      return {
        ...state,
        view: action.view,
      }

    default:
      return state
  }
}

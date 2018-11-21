import { PRIMO_BASE_URL } from 'Configurations/apis'
export const SUBMIT_SEARCH = 'SUBMIT_SEARCH'
export const RESULTS_READY = 'RESULTS_READY'
export const CLEAR_SEARCH = 'CLEAR_SEARCH'
export const PAGE_CHANGE = 'PAGE_CHANGE'

const searchBaseURL = PRIMO_BASE_URL
let searchCriteria = '?inst=NDU&search_scope=spec_coll'

export const changePage = (results, terms, page) => {
  return dispatch => {
    dispatch(pageChange(results, page))
    dispatch(submitSearch(results, terms, page))
  }
}

export const submitSearch = (results, terms, page) => {
  return dispatch => {
    dispatch(startSearch(terms))

    if (!page) {
      page = 1
    }
    if (!results) {
      results = 10
    }

    let offset = '&offset=' + String(results * page)
    let searchterm = '&q=any,contains,' + terms
    let perpage = '&limit=' + String(results + 1)
    let url = encodeURI(searchBaseURL + searchCriteria + searchterm + perpage + offset)
    let nextpage = false

    return fetch(
      url, {
        method: 'get',
      })
      .then(response => {
        if (response.status >= 200 && response.status < 400) {
          return response.json()
        } else {
          throw new Error(response.statusText)
        }
      })
      .then(json => {
        console.log(json)
        if (json.docs.length > results) {
          nextpage = true
          json.docs.splice(-1, 1)
        } else {
          nextpage = false
        }
        dispatch(returnResults(json, nextpage))
      })
      .catch(e => {
        console.log(e)
      })
  }
}

export const startSearch = (terms, page) => {
  return {
    type: SUBMIT_SEARCH,
    terms: terms,
    pageindex : page,
  }
}

export const returnResults = (results, nextpage) => {
  return {
    type: RESULTS_READY,
    results: results,
    nextpage: nextpage,
  }
}

export const clearSearch = () => {
  return {
    type: CLEAR_SEARCH,
    terms: '',
    results: [],
    pageindex : 0,
  }
}

export const pageChange = (perpage, page) => {
  return {
    type: PAGE_CHANGE,
    perpage: perpage,
    page: page,
  }
}

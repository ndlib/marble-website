import { PRIMO_BASE_URL } from 'Configurations/apis'
import fetchJson from 'Functions/fetchJSON'
export const SUBMIT_SEARCH = 'SUBMIT_SEARCH'
export const RESULTS_READY = 'RESULTS_READY'
export const CLEAR_SEARCH = 'CLEAR_SEARCH'
export const PAGE_CHANGE = 'PAGE_CHANGE'
export const VIEW_CHANGE = 'VIEW_CHANGE'

const searchBaseURL = PRIMO_BASE_URL
export const searchCriteria = '?inst=NDU&search_scope=spec_coll&view=full'

export const submitSearch = (perpage, terms, page) => {
  return dispatch => {
    page = page || 1
    perpage = perpage || 12
    dispatch(startSearch(String(terms), parseInt(page, 10), parseInt(perpage, 10)))

    const offset = `&offset=${String(parseInt(perpage, 10) * parseInt(page - 1, 10))}`
    const searchterm = `&q=any,contains,${String(terms)}`
    const limit = `&limit=${String(parseInt(perpage, 10) + 1)}`
    const url = encodeURI(`${searchBaseURL}${searchCriteria}${searchterm}${limit}${offset}`)
    let nextpage = false

    return fetchJson(url)
      .then(json => {
        if (json.docs && json.docs.length > perpage) {
          nextpage = true
          json.docs.splice(-1, 1)
        } else {
          nextpage = false
        }
        dispatch(returnResults(json, nextpage))
      })
      .catch(e => {
        console.error(e)
      })
  }
}

export const startSearch = (terms, page, perpage) => {
  return {
    type: SUBMIT_SEARCH,
    terms: terms,
    page : page,
    perpage: perpage,
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
    page : 1,
    view : 'list',
  }
}

export const pageChange = (perpage, page) => {
  return {
    type: PAGE_CHANGE,
    perpage: perpage,
    page: page,
  }
}

export const viewChange = (view) => {
  return {
    type: VIEW_CHANGE,
    view: view,
  }
}

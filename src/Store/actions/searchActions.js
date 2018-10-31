export const SUBMIT_SEARCH = 'SUBMIT_SEARCH'
export const RESULTS_READY = 'RESULTS_READY'
export const CLEAR_SEARCH = 'CLEAR_SEARCH'
export const PER_PAGE_CHANGE = 'PER_PAGE_CHANGE'

const searchBaseURL = 'https://a1fc3ld3d7.execute-api.us-east-1.amazonaws.com/dev/primo/v1/pnxs'
let searchCriteria = '?inst=NDU&search_scope=spec_coll'

export const submitSearch = (terms, numResults) => {
  return dispatch => {
    dispatch(startSearch(terms))

    let searchterm = '&q=any,contains,' + terms
    if (!numResults) {
      numResults = '10'
    }
    let perpage = '&limit=' + numResults
    let url = encodeURI(searchBaseURL + searchCriteria + searchterm + perpage)

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
        dispatch(returnResults(json))
      })
      .catch(e => {
        console.log(e)
      })
  }
}

export const startSearch = (terms) => {
  return {
    type: SUBMIT_SEARCH,
    terms: terms,
  }
}

export const returnResults = (results) => {
  return {
    type: RESULTS_READY,
    results: results,
  }
}

export const clearSearch = () => {
  return {
    type: CLEAR_SEARCH,
    terms: '',
    results: [],
  }
}

export const formChangePerPage = (perpage) => {
  return {
    type: PER_PAGE_CHANGE,
    resultspp: perpage,
  }
}

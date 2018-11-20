import { MANIFEST_BASE_URL } from 'Configurations/apis.js'

export const FETCH_MANIFEST = 'FETCH_MANIFEST'
export const RECEIVE_MANIFEST = 'RECEIVE_MANIFEST'
export const STATUS_FETCHING = 'STATUS_FETCHING'
export const STATUS_READY = 'STATUS_READY'

export const getManifest = (id) => {
  return dispatch => {
    dispatch(fetchManifest(id))
    return fetch(
      `${MANIFEST_BASE_URL}${id}`, {
        method: 'get',
      })
      .then(response => {
        if (response.status >= 200 && response.status < 400) {
          return response.json()
        } else {
          throw new Error(response.statusText)
        }
      }).then(json => {
        return dispatch(receiveManifest(id, json))
      })
      .catch(error => {
        console.error(error)
      })
  }
}

export const fetchManifest = (id) => {
  return {
    type: FETCH_MANIFEST,
    id: id,
  }
}

export const receiveManifest = (id, data) => {
  return {
    type: RECEIVE_MANIFEST,
    id: id,
    data: data,
  }
}

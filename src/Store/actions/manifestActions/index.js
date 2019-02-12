import { MANIFEST_BASE_URL } from 'Configurations/apis.js'
import fetchJSON from 'Functions/fetchJSON'
import {
  BROWSE_CONTEXT,
  COLLECTION_CONTEXT,
  ITEM_CONTEXT,
  VIEWER_CONTEXT,
} from 'Constants/viewingContexts'
export const FETCH_MANIFEST = 'FETCH_MANIFEST'
export const RECEIVE_MANIFEST = 'RECEIVE_MANIFEST'
export const MANIFEST_VIEW_CHANGE = 'MANIFEST_VIEW_CHANGE'
export const RECEIVE_MANIFEST_ERROR = 'RECEIVE_MANIFEST_ERROR'
export const STATUS_FETCHING = 'STATUS_FETCHING'
export const STATUS_READY = 'STATUS_READY'
export const STATUS_ERROR = 'STATUS_ERROR'

export const getManifest = (context, id) => {
  return dispatch => {
    dispatch(fetchManifest(id))
    let url
    switch (context) {
      case COLLECTION_CONTEXT:
      case BROWSE_CONTEXT:
        url = `${MANIFEST_BASE_URL}collection/${id}`
        break
      case ITEM_CONTEXT:
      case VIEWER_CONTEXT:
        url = `${MANIFEST_BASE_URL}${id}/manifest`
        break
      default:
        return dispatch(manifestError(id, 'invalid context'))
    }
    return fetchJSON(url)
      .then(json => dispatch(receiveManifest(id, json)))
      .catch(error => dispatch(manifestError(id, error)))
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

export const manifestError = (id, error) => {
  console.error(error)
  return {
    type: RECEIVE_MANIFEST_ERROR,
    id: id,
  }
}

export const viewChange = (view) => {
  return {
    type: MANIFEST_VIEW_CHANGE,
    view: view,
  }
}

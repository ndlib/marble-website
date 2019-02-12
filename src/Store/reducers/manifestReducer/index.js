import {
  FETCH_MANIFEST,
  RECEIVE_MANIFEST,
  RECEIVE_MANIFEST_ERROR,
  MANIFEST_VIEW_CHANGE,
  STATUS_FETCHING,
  STATUS_READY,
  STATUS_ERROR,
} from 'Store/actions/manifestActions'
export default(state = {
  view: 'grid',
  manifests: {},
}, action) => {
  switch (action.type) {
    case FETCH_MANIFEST:
      return {
        ...state,
        manifests: { ...state.manifests,
          [action.id]: {
            status: STATUS_FETCHING,
            data: null,
          },
        },
      }
    case RECEIVE_MANIFEST:
      return {
        ...state,
        manifests: {
          ...state.manifests,
          [action.id]: {
            status: STATUS_READY,
            data: action.data,
          },
        },
      }
    case RECEIVE_MANIFEST_ERROR:
      return {
        ...state,
        manifests: { ...state.manifests,
          [action.id]: {
            status: STATUS_ERROR,
            data: null,
          },
        },
      }
    case MANIFEST_VIEW_CHANGE:
      return {
        ...state,
        view: action.view,
      }
    default:
      return {
        ...state,
      }
  }
}

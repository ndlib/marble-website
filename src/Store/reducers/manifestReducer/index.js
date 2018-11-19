import {
  FETCH_MANIFEST,
  RECEIVE_MANIFEST,
  STATUS_FETCHING,
  STATUS_READY,
} from 'Store/actions/manifestActions'
export default(state = {
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
    default:
      return {
        ...state,
      }
  }
}

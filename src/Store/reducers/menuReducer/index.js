import {
  OPEN_MENU,
  CLOSE_MENU,
  TOGGLE_MENU,
} from 'Store/actions/menuActions'

export default(state = {
  open: false,
}, action) => {
  switch (action.type) {
    case OPEN_MENU:
      return {
        open: true,
      }
    case CLOSE_MENU:
      return {
        open: false,
      }
    case TOGGLE_MENU:
      return {
        open: !state.open,
      }
    default:
      return {
        ...state,
      }
  }
}

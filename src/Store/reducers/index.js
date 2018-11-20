import { combineReducers } from 'redux'
import manifestReducer from './manifestReducer'
import menuReducer from './menuReducer'
import searchReducer from './searchReducer'

export default combineReducers({
  manifestReducer,
  menuReducer,
  searchReducer,
})

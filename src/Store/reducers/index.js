import { combineReducers } from 'redux'
import manifestReducer from './manifestReducer'
import searchReducer from './searchReducer'

export default combineReducers({
  manifestReducer,
  searchReducer,
})

import { combineReducers, Reducer } from 'redux'
import { increment } from './increment-reducer'

export const rootReducer = combineReducers({
  increment
})

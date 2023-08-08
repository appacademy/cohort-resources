import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import entitiesReducer from './entitiesReducer';
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const dummyReducer = (state = {}, action) => state

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: dummyReducer,
  ui: dummyReducer
})

// const middleware = [thunk]

// if (process.env.NODE_ENV !== 'production') {
//   const logger = require('redux-logger')
//   middleware.push(logger)
// }

const configureStore = (preloadedState = {}) => (
  legacy_createStore(
    rootReducer, 
    preloadedState, 
    applyMiddleware(thunk, logger)
  )
)

export default configureStore;
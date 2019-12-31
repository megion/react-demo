import { createStore, applyMiddleware, compose } from "redux"
import reducer from "../reducer"
//import logger from "../middlewares/logger"
import randomId from "../middlewares/randomId"
import api from "../middlewares/api"
import thunk from "redux-thunk"
// Logger with default options
import logger from 'redux-logger'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk, logger, randomId, api),
  // other store enhancers if any
);

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(
  reducer,
  enhancer
)

// dev only
window.store = store

export default store

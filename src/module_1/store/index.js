import { createStore, applyMiddleware } from "redux"
import reducer from "../reducer"
import logger from "../middlewares/logger"
import randomId from "../middlewares/randomId"
import api from "../middlewares/api"

const enhancer = applyMiddleware(logger, randomId, api)

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(reducer, {}, enhancer)

// dev only
window.store = store

export default store

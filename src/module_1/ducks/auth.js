/*
 * duck widget. See https://github.com/erikras/ducks-modular-redux
 */

import { appName } from "../../../app.config"
const MODULE_NAME = "auth"
// Actions
const SIGN_UP_REQUEST = `${appName}/${MODULE_NAME}/SIGN_UP_REQUEST`
const SIGN_UP_SUCCESS = `${appName}/${MODULE_NAME}/SIGN_UP_SUCCESS`

// Reducer
export default function reducer(state = {}, action = {}) {
  switch (
    action.type // do reducer stuff
  ) {
    default:
      return state
  }
}

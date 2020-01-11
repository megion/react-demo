/*
 * duck widget. See https://github.com/erikras/ducks-modular-redux
 */
import firebase from "firebase"
import { Record } from "immutable"
import { appName } from "../../../app.config"

const AuthRecord = Record({
  loading: false,
  loaded: false,
  user: null,
  error: null,
})

export const moduleName = "auth"
// Actions
const SIGN_UP_REQUEST = `${appName}/${moduleName}/SIGN_UP_REQUEST`
const SIGN_UP_SUCCESS = `${appName}/${moduleName}/SIGN_UP_SUCCESS`
const SIGN_UP_ERROR = `${appName}/${moduleName}/SIGN_UP_ERROR`

const SIGN_IN_REQUEST = `${appName}/${moduleName}/SIGN_IN_REQUEST`
const SIGN_IN_SUCCESS = `${appName}/${moduleName}/SIGN_IN_SUCCESS`

// Reducer
export default function reducer(state = AuthRecord(), action = {}) {
  const { payload } = action
  switch (action.type) {
    case SIGN_UP_REQUEST:
      return state
        .set("loading", true)
        .set("loaded", false)

    case SIGN_UP_SUCCESS:
      return state
        .set("loading", false)
        .set("loaded", true)
        .set("user", payload.user)
        .set("error", null)

    case SIGN_UP_ERROR:
      return state
        .set("loading", false)
        .set("loaded", true)
        .set("error", payload.error)

    default:
      return state
  }
}

export function signUp(email, password) {
  return dispatch => {
    dispatch({
      type: SIGN_UP_REQUEST,
    })
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function(user) {
        dispatch({
          type: SIGN_UP_SUCCESS,
          payload: { user },
        })
      })
      .catch(function(error) {
        dispatch({
          type: SIGN_UP_ERROR,
          payload: { error },
        })
      })
    console.log("--- signUp")
    //get("/widget").then(widget => dispatch(updateWidget(widget)))
  }
}

export function signIn(email, password) {
  return dispatch => {
    console.log("--- signIn")
    //get("/widget").then(widget => dispatch(updateWidget(widget)))
  }
}

//firebase.auth().onAuthStateChange(user => {
  //console.log("--- onAuthStateChange:", user)
//})

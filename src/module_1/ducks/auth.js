/*
 * duck widget. See https://github.com/erikras/ducks-modular-redux
 */
import firebase from "firebase"
import { Record } from "immutable"
import { all, take, call, put } from "redux-saga/effects"
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
      return state.set("loading", true).set("loaded", false)

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

/**
 * actions
 */
export function signUpSuccess(user) {
  return {
    type: SIGN_UP_SUCCESS,
    payload: { user },
  }
}

export function signUpError(error) {
  return {
    type: SIGN_UP_ERROR,
    payload: { error },
  }
}

export function signUpRequest(email, password) {
  return {
    type: SIGN_UP_REQUEST,
    payload: { email, password },
  }
}

export function* signUpSaga() {
  // infinit cycle of generator: allow listen SIGN_UP_REQUEST actions.
  // Without this cycle only one SIGN_UP_REQUEST will be processed.
  while (true) {
    // filter only this action
    const action = yield take(SIGN_UP_REQUEST)

    const auth = firebase.auth()

    try {
      const user = yield call(
        [auth, auth.createUserWithEmailAndPassword],
        action.payload.email,
        action.payload.password
      )
      yield put(signUpSuccess(user))
    } catch (error) {
      yield put(signUpError(error))
    }
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

export function* saga() {
  yield all([signUpSaga()])
}

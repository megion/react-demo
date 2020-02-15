/*
 * duck widget. See https://github.com/erikras/ducks-modular-redux
 */
import { OrderedMap, Record } from "immutable"
import { put, takeEvery, call } from "redux-saga/effects"
import common from "common" // common library
import { appName } from "../../../app.config"

const StateRecord = Record({
  entities: new OrderedMap([]),
  loading: false,
  loaded: false,
})

const PersonRecord = Record({
  id: null,
  firstName: null,
  lastName: null,
  email: null,
})

export const moduleName = "events"
const prefix = `${appName}/${moduleName}`
// Actions
export const GET_ALL_REQUEST = `${prefix}/GET_ALL_REQUEST`
export const GET_ALL_SUCCESS = `${prefix}/GET_ALL_SUCCESS`

// Reducer
export default function reducer(state = StateRecord(), action = {}) {
  const { payload } = action
  switch (action.type) {
    case ADD_PERSON:
      return state.update("entities", entities => {
        return entities.push(PersonRecord(payload.person))
      })

    default:
      return state
  }
}

// Action creators
export function getAllRequest() {
  return {
    type: GET_ALL_REQUEST,
  }
}

export function* getAllSaga() {
  while (true) {
    // filter only this action
    const action = yield take(GET_ALL_REQUEST)
    const ref = firebase.database().ref("events")
    const data = yield call([ref, ref.once])
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

export function* saga() {
  yield takeEvery(ADD_PERSON_REQUEST, addPersionSaga)
}

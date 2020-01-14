/*
 * duck widget. See https://github.com/erikras/ducks-modular-redux
 */
import { List, Record } from "immutable"
import { put, takeEvery, call } from "redux-saga/effects"
import common from "common" // common library
import { appName } from "../../../app.config"

const StateRecord = Record({
  entities: new List([]),
})

const PersonRecord = Record({
  id: null,
  firstName: null,
  lastName: null,
  email: null,
})

export const moduleName = "people"
const prefix = `${appName}/${moduleName}`
// Actions
export const ADD_PERSON_REQUEST = `${prefix}/ADD_PERSON_REQUEST`
export const ADD_PERSON = `${prefix}/ADD_PERSON`

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
export function addPersonRequest(person) {
  return {
    type: ADD_PERSON_REQUEST,
    payload: { person },
  }
}

export function addPerson(person, id) {
  return {
    type: ADD_PERSON,
    payload: { person: { id: id, ...person } },
  }
}

/**
 * saga for add person action (generate person ID)
 */
export function* addPersionSaga(action) {
  // TODO: for testing the better use 'yield call'
  const newId = yield call(common.helpers.generateId)
  // instead of using:
  //const newId = common.helpers.generateId()
  yield put(addPerson(action.payload.person, newId))
}

export function* saga() {
  yield takeEvery(ADD_PERSON_REQUEST, addPersionSaga)
}

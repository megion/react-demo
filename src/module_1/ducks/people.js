/*
 * duck widget. See https://github.com/erikras/ducks-modular-redux
 */
import { List, Record } from "immutable"
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

export const moduleName = "peoplen"
const prefix = `${appName}/${moduleName}`
// Actions
const ADD_PERSON = `${prefix}/ADD_PERSON`

// Reducer
export default function reducer(state = StateRecord(), action = {}) {
  const { payload } = action
  switch (action.type) {
    case ADD_PERSON:
      return state.update("entities", entities => {
        return entities.push(payload.person)
      })

    default:
      return state
  }
}

// Action creators
export function addPerson(person) {
  /*
   * TODO: here use dispatch from thunk middleware because this code is not pure
   * function: 
   * `id: Date.now()`
   */
  return dispatch => {
    dispatch({
      type: ADD_PERSON,
      payload: { person: { id: Date.now(), ...person } },
    })
  }
}

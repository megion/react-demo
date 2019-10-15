import {
  ADD_COMMENT,
  LOAD_ALL_COMMENTS,
  START,
  SUCCESS,
  FAIL,
} from "../AC/constants"
import { Map, Record } from "immutable"
import common from "common" // common library

const CommentRecord = Record({
  text: undefined,
  user: undefined,
  id: undefined,
  loading: false,
  loaded: false,
})

const StateRecord = Record({
  loading: false,
  loaded: false,
  entities: new OrderedMap({}),
})

const defaultState = StateRecord()

export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return state.setIn(
        ["entities", action.randomId],
        CommentRecord({ ...action.payload.comment, id: action.randomId })
      )

    //return {
    //...state,
    //[action.randomId]: { ...action.payload.comment, id: action.randomId },
    //}

    case LOAD_ALL_COMMENTS + START:
      return state.set("loading", true)

    case LOAD_ALL_COMMENTS + SUCCESS:
      /*
       * return array of all comments
       */
      return state
        .set(
          "entities",
          common.helpers.arrToImmutableMap(action.response, CommentRecord)
        )
        .set("loading", false)
        .set("loaded", true)

    default:
      return state
  }
}

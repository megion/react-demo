import {
  ADD_COMMENT,
  LOAD_COMMENTS_FOR_PAGE,
  LOAD_ARTICLE_COMMENTS,
  START,
  SUCCESS,
  FAIL,
} from "../AC/constants"
import { Map, Record, OrderedMap } from "immutable"
import common from "common" // common library

const CommentRecord = Record({
  text: undefined,
  user: undefined,
  id: undefined,
  //loading: false,
  //loaded: false,
})

const StateRecord = Record({
  entities: new OrderedMap({}),
  pagination: new Map({}),
  total: null,
})

const defaultState = StateRecord()

export default (state = defaultState, action) => {
  const { payload } = action

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

    case LOAD_COMMENTS_FOR_PAGE + START:
      return state.setIn(["pagination", payload.page, "loading"], true)

    case LOAD_COMMENTS_FOR_PAGE + SUCCESS:
      /*
       * return array of all comments
       */
      return state
        .set("total", payload.response.total)
        .merge(
          "entities",
          common.helpers.arrToImmutableMap(
            payload.response.records,
            CommentRecord
          )
        )
        .setIn(
          ["pagination", payload.page, "ids"],
          payload.response.records.map(comment => comment.id)
        )
        .setIn(["pagination", payload.page, "loading"], false)
        .setIn(["pagination", payload.page, "loaded"], true)

    case LOAD_ARTICLE_COMMENTS + SUCCESS:
      return state.update("entities", entities => {
        return entities.merge(
          common.helpers.arrToImmutableMap(payload.response, CommentRecord)
        )
      })

    default:
      return state
  }
}

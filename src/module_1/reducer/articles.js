import {
  DELETE_ARTICLE,
  ADD_COMMENT,
  LOAD_ALL_ARTICLES,
  LOAD_ARTICLE,
  START,
  SUCCESS,
  FAIL,
} from "../AC/constants"
import common from "common" // common library
import { Map, Record, OrderedMap } from "immutable"

const ArticleRecord = Record({
  text: undefined,
  title: undefined,
  id: undefined,
  comments: [],
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
  const { payload } = action

  switch (action.type) {
    case DELETE_ARTICLE:
      /*
       * immutable delete article from state (immutable map)
       */
      return state.deleteIn("entities", payload.article.id)

    case ADD_COMMENT:
      const article = payload.article
      /*
       * return new copy of articles map and replace target article
       * with new comments array
       */
      //return {
      //...state,
      //[article.id]: {
      //...article,
      //comments: (article.comments || []).concat(action.randomId),
      //},
      //}

      /*
       * immutable update inner object (comments)
       *
       * comments is not immutable array but
       * comments.concat(randomId) - return new array so it work right (we
       * don't modified current comments array)
       */
      return state.updateIn(["entities", article.id, "comments"], comments =>
        comments.concat(randomId)
      )

    case LOAD_ALL_ARTICLES + START:
      return state.set("loading", true)

    case LOAD_ALL_ARTICLES + SUCCESS:
      /*
       * return array of all articles
       */
      return state
        .set(
          "entities",
          common.helpers.arrToImmutableMap(action.response, ArticleRecord)
        )
        .set("loading", false)
        .set("loaded", true)

    case LOAD_ARTICLE + START:
      console.log("art", art)
      return state.setIn(["entities", payload.article.id, "loading"], true)

    case LOAD_ARTICLE + SUCCESS:
      const art = { ...action.response, loading: false, loaded: true }
      console.log("art", art)
      /*
       * return array of all articles
       */
      return state.setIn(
        ["entities", payload.article.id],
        ArticleRecord({ ...action.response, loading: false, loaded: true })
      )

    default:
      return state
  }
}

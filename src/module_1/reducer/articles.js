import {
  DELETE_ARTICLE,
  ADD_COMMENT,
  LOAD_ALL_ARTICLES,
  LOAD_ARTICLE,
  LOAD_ARTICLE_COMMENTS,
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
  commentsLoading: false,
  commentsLoaded: false,
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
      return state.setIn(["entities", payload.articleId, "loading"], true)

    case LOAD_ARTICLE + SUCCESS:
      const art = { ...payload.response, loading: false, loaded: true }
      /*
       * return array of all articles
       */
      return state.setIn(["entities", payload.articleId], ArticleRecord(art))

    case LOAD_ARTICLE_COMMENTS + SUCCESS:
      return state.updateIn(["entities", payload.article.id], article => {
        return article.set("commentsLoaded", true).set("commentsLoading", false)
      })

    case LOAD_ARTICLE_COMMENTS + START:
      return state.updateIn(["entities", payload.article.id], article => {
        return article.set("commentsLoaded", false).set("commentsLoading", true)
      })

    default:
      return state
  }
}

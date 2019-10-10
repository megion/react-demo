import { DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES } from "../AC/constants"
import common from "common" // common library
import { Map, Record } from "immutable"

const ArticleRecord = Record({
  text: undefined,
  title: undefined,
  id: undefined,
  comments: [],
})

const defaultState = new Map({})

export default (state = defaultState, action) => {
  switch (action.type) {
    case DELETE_ARTICLE:
      /*
       * state is immutable map so state.delete return new map and
       * state did not change
       */
      return state.delete(action.payload.article.id)

    case ADD_COMMENT:
      const article = action.payload.article
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
       */
      return state.updateIn([article.id, "comments"], comments =>
        comments.concat(randomId)
      )

    case LOAD_ALL_ARTICLES:
      /*
       * return array of all articles
       */
      return common.helpers.arrToImmutableMap(action.response, ArticleRecord)

    default:
      return state
  }
}

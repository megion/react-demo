import { normalizedArticles as defaultArticles } from "../fixtures"
import { DELETE_ARTICLE, ADD_COMMENT } from "../AC/constants"
import common from "common" // common library

export default (state = common.helpers.arrToMap(defaultArticles), action) => {
  console.log("articles reducer state:", state);
  switch (action.type) {
    case DELETE_ARTICLE:
      // return new filtered array
      //const newState = state.filter(item => {
      //return item.id !== action.payload.article.id
      //})
      //return newState
      let copyState = { ...state }
      delete copyState[action.payload.article.id]
      return copyState

    case ADD_COMMENT:
      const article = action.payload.article
      /*
       * return new copy of articles map and replace target article
       * with new comments array
       */
      return {
        ...state,
        [article.id]: {
          ...article,
          comments: (article.comments || []).concat(action.randomId),
        },
      }

    default:
      return state
  }
}

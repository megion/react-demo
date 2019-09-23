import defaultArticles from "../fixtures"
import { DELETE_ARTICLE } from "../AC/constants"

export default (state = defaultArticles, action) => {
  switch (action.type) {
    case DELETE_ARTICLE:
      // return new filtered array
      const newState = state.filter(item => {
        return item.id !== action.payload.article.id
      })
      return newState
    //case "ADD_ARTICLE":
    //return state
    default:
      return state
  }
}

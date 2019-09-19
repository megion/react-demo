import {articles as defaultArticles} from "../fixtures"

export default (state = defaultArticles, action) {
  switch (action.type) {
    case "DELETE_ARTICLE":
      return state
    case "ADD_ARTICLE":
      return state
    default:
      return state
  }
}

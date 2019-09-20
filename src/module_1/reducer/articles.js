import defaultArticles from "../fixtures"
import { DELETE_ARTICLE } from "../AC/constants"

export default (state = defaultArticles, action) => {
  switch (action.type) {
    case DELETE_ARTICLE:
      // return new filtered array
      console.log("reducer delete article", state, action)
      const newState = state.filter(item => {
        return item != action.payload.article
      })
      console.log("reducer newState", newState)
      return newState
    //case "ADD_ARTICLE":
    //return state
    default:
      return state
  }
}

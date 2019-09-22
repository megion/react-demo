import { DELETE_ARTICLE } from "../AC/constants"

const defaultFilters = {
  selected: []
}

export default (state = defaultArticles, action) => {
  switch (action.type) {
    case DELETE_ARTICLE:
      // return new filtered array
      const newState = state.filter(item => {
        return item != action.payload.article
      })
      return newState
    //case "ADD_ARTICLE":
    //return state
    default:
      return state
  }
}

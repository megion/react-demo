// Load method categories.
import { CHANGE_ARTICLE_SELECTION, DELETE_ARTICLE } from "../AC/constants"

const defaultFilters = {
  selectedArticles: [],
}

export default (state = defaultFilters, action) => {
  switch (action.type) {
    case CHANGE_ARTICLE_SELECTION:
      return Object.assign({}, state, {
        selectedArticles: action.payload.selected,
      })
    //return {...state, selectedArticles: action.payload.selected}
    case DELETE_ARTICLE:
      const newSelectedArticles = state.selectedArticles
        ? state.selectedArticles.filter(item => {
            return item.id !== action.payload.article.id
          })
        : state.selectedArticles
      const newState = {
        ...state,
        selectedArticles: newSelectedArticles,
      }
      return newState
    default:
      return state
  }
}

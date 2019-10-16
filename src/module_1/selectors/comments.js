/*
 * selectors. See reselect: https://github.com/reduxjs/reselect
 */
import { createSelector } from "reselect"

const commentsSelector = state => {
  return state.comments.entities
}
const idSelector = (state, props) => props.id

/*
 * selector factory.
 * Create commentByIdSelector
 */
export const commentByIdSelectorFactory = () => {
  return createSelector(
    commentsSelector,
    idSelector,
    (comments, id) => {
      return comments.get(id)
    }
  )
}

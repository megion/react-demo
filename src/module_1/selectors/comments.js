/*
 * selectors. See reselect: https://github.com/reduxjs/reselect
 */
import { createSelector } from "reselect"

const commentsSelector = state => state.comments
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
      console.log("commentByIdSelector", id)
      //const comment = comments.find(comment => comment.id === id)
      const comment = comments[id]
      return comment
    }
  )
}

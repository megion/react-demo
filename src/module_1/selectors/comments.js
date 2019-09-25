/*
 * selectors. See reselect: https://github.com/reduxjs/reselect
 */
import { createSelector } from "reselect"

const commentsSelector = state => state.comments
const idSelector = (state, props) => props.id

export const commentByIdSelector = createSelector(
  commentsSelector,
  idSelector,
  (comments, id) => {
    console.log("commentByIdSelector")
    const comment = comments.find(comment => comment.id === id)
    return comment
  }
)

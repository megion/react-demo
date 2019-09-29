import { normalizedComments as defaultComments } from "../fixtures"
import { ADD_COMMENT } from "../AC/constants"
import common from "common" // common library

export default (state = common.helpers.arrToMap(defaultComments), action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        [action.randomId]: { ...action.payload.comment, id: action.randomId },
      }

    default:
      return state
  }
}

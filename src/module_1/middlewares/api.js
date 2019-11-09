import { START, SUCCESS, FAIL } from "../AC/constants"
/*
 * generate random Id middleware
 */
export default store => next => action => {
  // callAPI is request string
  const { callAPI, type, ...rest } = action
  if (!callAPI) {
    return next(action)
  }

  next({ ...rest, type: type + START })

  setTimeout(() => {
    // do request
    fetch(callAPI)
      .then(res => res.json())
    // FIXME: put response to action.payload
      .then(response => next({ ...rest, type: type + SUCCESS, response }))
      .catch(error => next({ ...rest, type: type + FAIL, error }))
  }, 4000)
}

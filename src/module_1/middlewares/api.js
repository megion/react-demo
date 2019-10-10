/*
 * generate random Id middleware
 */
export default store => next => action => {
  // callAPI is request string
  const { callAPI } = action
  if (!callAPI) {
    return next(action)
  }

  // do request
  fetch(callAPI)
    .then(res => res.json())
    .then(response => next({ ...action, response }))
}

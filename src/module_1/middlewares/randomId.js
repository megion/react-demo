/*
 * generate random Id middleware
 */
export default store => next => action => {
  if (action.generateId) {
    next({ ...action, randomId: (Date.now() + Math.random()).toString() })
  } else {
    next(action)
  }
}

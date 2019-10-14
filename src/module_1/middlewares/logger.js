/*
 * logger middleware
 * function curring
 */
export default store => next => action => {
  //console.log("logger state before:", store.getState())
  next(action)
  //console.log("logger state after:", store.getState())
}

import { combineReducers } from "redux"
import { reducer as formReducer } from "redux-form"
import counterReducer from "./counter"
import articles from "./articles"
import filters from "./filters"
import comments from "./comments"
import authReducer, { moduleName as authModule } from "../ducks/auth"
import eventsReducer, { moduleName as eventsModule } from "../ducks/events"

export default combineReducers({
  count: counterReducer,
  articles,
  filters,
  comments,
  // ...your other reducers here
  // you have to pass formReducer under 'form' key,
  // for custom keys look up the docs for 'getFormState'
  form: formReducer,
  [authModule]: authReducer,
  [eventsModule]: eventsReducer,
})

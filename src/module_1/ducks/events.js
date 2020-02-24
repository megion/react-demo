/*
 * duck widget. See https://github.com/erikras/ducks-modular-redux
 */
import { OrderedMap, Record } from "immutable"
import { put, all, call } from "redux-saga/effects"
import { appName } from "../../../app.config"
import { createSelector } from "reselect"

const StateRecord = Record({
  entities: new OrderedMap([]),
  loading: false,
  loaded: false,
})

const EventRecord = Record({
  uid: null,
  title: null,
  url: null,
  where: null,
  when: null,
  month: null,
  month: null,
  submissionDeadLine: null
})

export const moduleName = "events"
const prefix = `${appName}/${moduleName}`
// Actions
export const GET_ALL_REQUEST = `${prefix}/GET_ALL_REQUEST`
export const GET_ALL_SUCCESS = `${prefix}/GET_ALL_SUCCESS`

// Reducer
export default function reducer(state = StateRecord(), action = {}) {
  const { payload } = action
  switch (action.type) {
    case GET_ALL_REQUEST:
      return state.set("loading", true)

    case GET_ALL_SUCCESS:
      /*
       * return array of all articles
       */
      return (
        state
          .set("entities", new OrderedMap(payload))
          .set("loading", false)
          .set("loaded", true)
      )
    default:
      return state
  }
}

// Action creators
export function getAllRequest() {
  return {
    type: GET_ALL_REQUEST,
  }
}

export function getAllSuccess(events) {
  return {
    type: GET_ALL_SUCCESS,
    payload: {events}
  }
}

export function* getAllSaga() {
  while (true) {
    // filter only this action
    yield take(GET_ALL_REQUEST)
    const ref = firebase.database().ref("events")
    const data = yield call([ref, ref.once], "value")

    yield put(getAllSuccess(data.val()))
  }
}

export function* saga() {
  yield all([getAllSaga])
}

const eventsSelector = state => state[moduleName].entities
const filtersSelector = state => state.filters

export const filtrateArticlesSelector = createSelector(
  articlesSelector,
  filtersSelector,
  (articles, filters) => {
    const selectedArticles = filters.selectedArticles
    //console.log("filtrateArticles, articles: ", articles)
    //console.log("filtrateArticles, filters: ", filters)
    /*
     * filter articles here using selectedArticles
     */
    let filteredArticles = articles;
    if(selectedArticles && selectedArticles.length) {
      filteredArticles = common.helpers.filterMap(articles, (id, article) => {
        return _.find(selectedArticles, { id: article.id }) ? true : false
      })
    }
    return filteredArticles
  }
)

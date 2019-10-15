import {
  DELETE_ARTICLE,
  INCREMENT_COUNTER,
  CHANGE_ARTICLE_SELECTION,
  LOAD_ALL_ARTICLES,
  ADD_COMMENT,
  LOAD_ARTICLE,
  START,
  SUCCESS,
  FAIL,
} from "./constants"

/*
 * action creators
 */

export function increment() {
  return {
    type: INCREMENT_COUNTER,
  }
}

export function deleteArticle(article) {
  return {
    type: DELETE_ARTICLE,
    payload: { article }, // 'payload' is convention of name
  }
}

export function changeArticleSelection(selected) {
  return {
    type: CHANGE_ARTICLE_SELECTION,
    payload: { selected },
  }
}

export function addComment(comment, article) {
  return {
    type: ADD_COMMENT,
    payload: { comment, article },
    generateId: true,
  }
}

export function loadAllArticles() {
  return {
    type: LOAD_ALL_ARTICLES,
    callAPI: "/api/article",
  }
}

/*
 * load article by ID. Use dispatch function (see redux-thunk) frum 'thunk'
 * middleware
 */
export function loadArticle(article) {
  return dispatch => {
    dispatch({
      type: LOAD_ARTICLE + START,
      payload: { article },
    })

    setTimeout(function() {
      fetch(`/api/article/${article.id}`)
        .then(res => res.json())
        .then(response => {
          const res = { article, response }
          console.log("dispatch loadArticle result:", res)
          dispatch({
            type: LOAD_ARTICLE + SUCCESS,
            payload: { article, response },
          })
        })
        .catch(error =>
          dispatch({
            type: LOAD_ARTICLE + FAIL,
            payload: { article, error },
          })
        )
    }, 2000)
  }
}

/*
 * load article by ID. Use dispatch function (see redux-thunk) frum 'thunk'
 * middleware
 */
export function loadAllComments() {
  return dispatch => {
    dispatch({
      type: LOAD_ALL_COMMENTS + START,
    })

    setTimeout(function() {
      fetch("/api/comment/")
        .then(res => res.json())
        .then(response => {
          dispatch({
            type: LOAD_ALL_COMMENTS + SUCCESS,
            payload: { response },
          })
        })
        .catch(error =>
          dispatch({
            type: LOAD_ALL_COMMENTS + FAIL,
            payload: { error },
          })
        )
    }, 2000)
  }
}

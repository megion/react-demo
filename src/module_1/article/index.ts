export const DELETE_ARTICLE = "DELETE_ARTICLE"
export const CHANGE_ARTICLE_SELECTION = "CHANGE_ARTICLE_SELECTION"
export const LOAD_ARTICLE_COMMENTS = "LOAD_ARTICLE_COMMENTS"
export const LOAD_ALL_ARTICLES = "LOAD_ALL_ARTICLES"
export const LOAD_ARTICLE = "LOAD_ARTICLE"


import { appName } from "../../../app.config"
export const moduleName = "people"
const prefix = `${appName}/${moduleName}`
// Actions
export const ADD_PERSON_REQUEST = `${prefix}/ADD_PERSON_REQUEST`
export const ADD_PERSON = `${prefix}/ADD_PERSON`

export interface Article {
  id: string
  title: string
  text: string
  commentsLoading: boolean
  commentsLoaded: boolean
}

/*
 * action creators
 */
export function deleteArticle(article: Article) {
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
export function loadArticle(articleId) {
  return dispatch => {
    dispatch({
      type: LOAD_ARTICLE + START,
      payload: { articleId },
    })

    setTimeout(function() {
      fetch(`/api/article/${articleId}`)
        .then(res => res.json())
        .then(response => {
          dispatch({
            type: LOAD_ARTICLE + SUCCESS,
            payload: { articleId, response },
          })
        })
        .catch(error =>
          dispatch({
            type: LOAD_ARTICLE + FAIL,
            payload: { articleId, error },
          })
        )
    }, 2000)
  }
}

/*
 * load all comments.
 */
export function loadComments() {
  return dispatch => {
    dispatch({
      type: LOAD_COMMENTS_FOR_PAGE + START,
    })

    setTimeout(function() {
      fetch("/api/comment/")
        .then(res => res.json())
        .then(response => {
          dispatch({
            type: LOAD_COMMENTS_FOR_PAGE + SUCCESS,
            payload: { response },
          })
        })
        .catch(error =>
          dispatch({
            type: LOAD_COMMENTS_FOR_PAGE + FAIL,
            payload: { error },
          })
        )
    }, 2000)
  }
}

/*
 * load all comments.
 */
export function loadArticleComments(article: Article) {
  return dispatch => {
    if (!article.commentsLoading && !article.commentsLoaded) {
      return
    }

    dispatch({
      type: LOAD_ARTICLE_COMMENTS + START,
      payload: { article },
    })

    setTimeout(function() {
      fetch(`/api/comment?article=${article.id}`)
        .then(res => res.json())
        .then(response => {
          dispatch({
            type: LOAD_ARTICLE_COMMENTS + SUCCESS,
            payload: { article, response },
          })
        })
        .catch(error =>
          dispatch({
            type: LOAD_ARTICLE_COMMENTS + FAIL,
            payload: { article, error },
          })
        )
    }, 2000)
  }
}

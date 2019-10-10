import {
  DELETE_ARTICLE,
  INCREMENT_COUNTER,
  CHANGE_ARTICLE_SELECTION,
  LOAD_ALL_ARTICLES,
  ADD_COMMENT,
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
    callAPI: '/api/article',
  }
}

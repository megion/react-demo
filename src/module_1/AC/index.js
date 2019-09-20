import { DELETE_ARTICLE, INCREMENT_COUNTER } from "./constants"

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
    payload: {article} // 'payload' is convention of name
  }
}

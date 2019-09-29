import _ from "lodash"
import common from "common" // common library
import { createSelector } from "reselect"

const articlesSelector = state => state.articles
const filtersSelector = state => state.filters

export const filtrateArticlesSelector = createSelector(
  articlesSelector,
  filtersSelector,
  (articles, filters) => {
    const selectedArticles = filters.selectedArticles
    console.log("filtrateArticles, articles: ", articles)
    /*
     * filter articles here using selectedArticles
     */
    const filteredArticles = articles;
    if(selectedArticles && selectedArticles.length) {
      filteredArticles = common.helpers.filterMap(articles, (id, article) => {
        return true
        //return (
          ////!selectedArticles ||
          ////!selectedArticles.length ||
          ////_.find(selectedArticles, { id: article.id })
        //)
      })
    }
    return filteredArticles
  }
)

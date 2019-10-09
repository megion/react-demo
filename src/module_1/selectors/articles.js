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
    console.log("filtrateArticles, filters: ", filters)
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

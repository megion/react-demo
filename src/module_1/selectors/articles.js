import _ from "lodash"
import { createSelector } from "reselect"

const articlesSelector = state => state.articles
const filtersSelector = state => state.filters

export const filtrateArticlesSelector = createSelector(
  articlesSelector,
  filtersSelector,
  (articles, filters) => {
    console.log("filtrateArticles")
    const selectedArticles = filters.selectedArticles
    /*
     * filter articles here using selectedArticles
     */
    const filteredArticles = articles.filter(article => {
      return (
        !selectedArticles ||
        !selectedArticles.length ||
        _.find(selectedArticles, { id: article.id })
      )
    })
    return filteredArticles
  }
)

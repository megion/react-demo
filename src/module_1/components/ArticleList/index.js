import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import _ from "lodash"
import Article from "../Article"
import "./index.less"
import common from "common" // common library

class ArticleList extends Component {
  static propTypes = {
    // from redux connect
    articles: PropTypes.array.isRequired,
    // from accordion
    openItemId: PropTypes.string,
    toggleOpenItem: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
  }

  render() {
    console.log("render articles");
    const { articles, openItemId, toggleOpenItem } = this.props
    const articleElements = articles.map((article, index) => {
      return (
        <li className="article-list__li" key={article.id}>
          <Article
            article={article}
            isOpen={openItemId === article.id}
            onCloseClick={toggleOpenItem(article.id, event)}
          />
        </li>
      )
    })

    return <ul className="article-list">{articleElements}</ul>
  }
}

export default connect(
  state => {
    const selectedArticles = state.filters.selectedArticles
    /*
     * filter articles here using selectedArticles
     */
    const filteredArticles = state.articles.filter(article => {
      return (
        !selectedArticles ||
        !selectedArticles.length ||
        _.find(selectedArticles, { id: article.id })
      )
    })
    return {
      articles: filteredArticles
    }
  }
  //{ deleteArticle } // map reducer function to props
)(common.accordion(ArticleList))

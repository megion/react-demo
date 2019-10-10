import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import Article from "../Article"
import { filtrateArticlesSelector } from "../../selectors/articles"
import { loadAllArticles } from "../../AC"
import "./index.less"
import common from "common" // common library

class ArticleList extends Component {
  static propTypes = {
    // from redux connect
    articles: PropTypes.object.isRequired,
    // from accordion
    openItemId: PropTypes.string,
    toggleOpenItem: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.loadAllArticles()
  }

  render() {
    const { articles, openItemId, toggleOpenItem } = this.props
    console.log("render articles", articles)

    const articleElements = common.helpers
      .immutableMapToArr(articles)
      .map((article, index) => {
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
    return {
      articles: filtrateArticlesSelector(state),
    }
  },
  { loadAllArticles } // map reducer function to props
)(common.accordion(ArticleList))

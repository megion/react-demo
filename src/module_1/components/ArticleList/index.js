import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
//import Article from "../Article"
import Loader from "../Loader"
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
    if (!this.props.loaded && !this.props.loading) {
      this.props.loadAllArticles()
    }
  }

  render() {
    const { articles, openItemId, toggleOpenItem } = this.props

    if (this.props.loading) {
      return <Loader />
    }

    const articleElements = common.helpers
      .immutableMapToArr(articles)
      .map((article, index) => {
        return (
          <li className="article-list__li" key={article.id}>
            <NavLink
              to={`/articles/${article.id}`}
              activeClassName="app-link_active"
            >
              {article.title}
            </NavLink>
            {/* 
            <Article
              article={article}
              isOpen={openItemId === article.id}
              onCloseClick={toggleOpenItem(article.id, event)}
            />
            */}
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
      loading: state.articles.loading,
      loaded: state.articles.loaded,
    }
  },
  { loadAllArticles }, // map reducer function to props
  null,
  {pure: false}
)(common.accordion(ArticleList))

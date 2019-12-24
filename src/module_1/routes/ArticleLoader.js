import React, { Component } from "react"
import { connect } from "react-redux"
import { loadArticle } from "../AC"
import PropTypes from "prop-types"
import Loader from "../components/Loader"
import Article from "../components/Article"

class ArticleLoader extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    // from connect
    article: PropTypes.object,
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { article } = this.props
    if (!article || article.loading) {
      return <Loader />
    }
    return <Article article={article} />
  }

  /*
   * call when parent component rebuilding children because parent state was
   * changed
   */
  componentDidMount() {
    const { article } = this.props
    if (!article || (!article.loading && !article.loaded)) {
      this.props.loadArticle(this.props.id)
    }
  }
}

export default connect(
  (state, ownProps) => {
    return {
      article: state.articles.entities.get(ownProps.id),
    }
  },
  { loadArticle }, // map reducer function to props
  null,
  { pure: false }
)(ArticleLoader)

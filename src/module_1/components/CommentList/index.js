import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { loadArticleComments } from "../../AC"
import Comment from "../Comment"
import "./index.less"
import CommentForm from "../CommentForm"
import Loader from "../Loader"
import common from "common" // common library

class CommentList extends Component {
  static propTypes = {
    article: PropTypes.object.isRequired,
    // from toggleOpen decorator
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func,
  }

  /**
   * Default props
   */
  //static defaultProps = {
  //comments: []
  //};

  constructor(props) {
    super(props)
  }

  render() {
    const text = this.props.isOpen ? "hide comments" : "show comments"
    return (
      <div>
        <CommentForm article={this.props.article} />
        <button onClick={this.props.toggleOpen}>{text}</button>
        {this.getBody()}
      </div>
    )
  }

  getBody() {
    if (!this.props.isOpen) {
      return null
    }
    if (this.props.article.commentsLoading) {
      return <Loader />
    }
    if (!this.props.article.commentsLoaded) {
      return null 
    }
    const { comments } = this.props.article
    if (!comments.length) {
      return <p>No comments yet</p>
    }
    return (
      <ul className="comment-list">
        {comments.map(commentId => {
          return (
            <li className="comment-list__li" key={commentId}>
              <Comment id={commentId} />
            </li>
          )
        })}
      </ul>
    )
  }

  componentDidMount() {
    const { isOpen, article, loadArticleComments } = this.props
    if (isOpen) {
      loadArticleComments(article)
    }
  }
}

export default connect(
  null, // not need get data from store
  { loadArticleComments } // map reducer function to props
)(common.toggleOpen(CommentList))

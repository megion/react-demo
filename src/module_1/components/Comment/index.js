import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { commentByIdSelector } from "../../selectors/comments"

class Comment extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    // from connect
    comment: PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
    }).isRequired,
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { comment } = this.props
    return (
      <div>
        <p>
          {comment.text}
          <b>by {comment.user}</b>
        </p>
      </div>
    )
  }
}

export default connect(
  (state, ownProps) => {
    return {
      comment: commentByIdSelector(state, ownProps),
    }
  }, // map store data to props
  null // map reducer function to props
)(Comment)

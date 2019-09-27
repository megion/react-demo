import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { commentByIdSelectorFactory } from "../../selectors/comments"

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

/*
 * return function which create function and store commentByIdSelector in
 * circuit. It is special case suppored by redux for create selector for each
 * object (comment). It is need in that case because selector should store last
 * result only for own comment.
 * Otherwise we will have one selector for many comment and then selector will
 * not work correctly (because it store only one last function result).
*/
function mapStoreStateToPropsFactory() {
  const commentByIdSelector = commentByIdSelectorFactory()
  return (state, ownProps) => {
    return {
      comment: commentByIdSelector(state, ownProps),
    }
  }
}

export default connect(
  mapStoreStateToPropsFactory, // map store data to props
  null // map reducer function to props
)(Comment)

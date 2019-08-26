import React, {Component, PureComponent} from 'react';
import CommentList from 'react';

class Comment extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {comment} = this.props;
    return (
      <div>
        <p>
          {comment.text}
          <b>by {comment.user}</b>
        </p>
      </div>
    );
  }
}

export default Comment;

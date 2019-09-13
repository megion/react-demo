import React, {Component} from 'react';

class Comment extends Component {
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

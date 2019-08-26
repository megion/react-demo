import React, {Component} from 'react';
import Comment from '../Comment';
import './index.less';

class CommentList extends Component {
  /**
   * Default props
   */
  static defaultProps = {
    comments: [],
  };

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  render() {
    const text = this.state.isOpen ? 'hide comments' : 'show comments';
    return (
      <div>
        <button onClick={this.toggleOpen}>{text}</button>
        {this.getBody()}
      </div>
    );
  }

  getBody() {
    if (!this.state.isOpen) {
      return null;
    }
    const {comments} = this.props;
    if (!comments.length) {
      return <p>No comments yet</p>;
    }
    return (
      <ul className="comment-list">
        {comments.map(comment => {
          return (
            <li className="comment-list__li" key={comment.id}>
              <Comment comment={comment} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default CommentList;

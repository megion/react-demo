import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import common from 'common'; // common library

class UserForm extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      article: null,
    };
  }

  /*
   * build virtual DOM
   */
  render() {
    const {articles} = this.props;
    const articleSelectOptions = articles.map(article => {
      return {
        label: article.title,
        value: article.id,
      };
    });
    return (
      <div>
        <form>
          <div class="form-group">
            <label for="userName">User name</label>
            <input
              type="text"
              class="form-control"
              id="userName"
              aria-describedby="emailHelp"
              placeholder="Enter name"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>

          <div class="form-group">
            <label for="articleSelect">Select</label>
            <Select
              onChange={this.onChangeArticle}
              value={this.state.article}
              options={articleSelectOptions}
            />
          </div>

          <div></div>
        </form>
      </div>
    );
  }

  onChangeUsername = ev => {
    // limit max length
    if (ev.target.value.length > 10) {
      return;
    }

    this.setState({
      username: ev.target.value,
    });
  };

  onChangeArticle = selection => {
    this.setState({
      article: selection,
    });
  };
}

export default UserForm;

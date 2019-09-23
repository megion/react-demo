import React, { Component } from "react"
import { connect } from "react-redux"
import { changeArticleSelection } from "../../AC"
import PropTypes from "prop-types"
import Select from "react-select"
import common from "common" // common library

class UserForm extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    selectedArticles: PropTypes.array
  }

  constructor(props) {
    super(props)

    this.state = {
      username: "",
    }
  }

  /*
   * build virtual DOM
   */
  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="userName">User name</label>
            <input
              type="text"
              className="form-control"
              id="userName"
              aria-describedby="emailHelp"
              placeholder="Enter name"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>

          <div className="form-group">
            <label htmlFor="articleSelect">Select</label>
            <Select
              onChange={this.onChangeArticle}
              isMulti
              options={this.props.articles}
              value={this.props.selectedArticles}
              getOptionValue={opt => opt.id}
              getOptionLabel={opt => opt.title}
            />
          </div>

          <div></div>
        </form>
      </div>
    )
  }

  onChangeUsername = ev => {
    // limit max length
    if (ev.target.value.length > 10) {
      return
    }

    this.setState({
      username: ev.target.value,
    })
  }

  onChangeArticle = selection => {
    console.log("selection", selection)
    this.props.changeArticleSelection(selection)
  }
}

export default connect(
  state => {
    return {
      articles: state.articles,
      selectedArticles: state.filters.selectedArticles,
    }
  },
  { changeArticleSelection } // map reducer function to props
)(UserForm)

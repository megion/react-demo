import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
//import Article from "../Article"
import Loader from "../Loader"
import { getAllRequest, moduleName as eventsModuleName } from "../ducks/events"
import "./index.less"
import common from "common" // common library

class EventList extends Component {
  static propTypes = {
    // from redux connect
    events: PropTypes.object.isRequired,
    // from accordion
    openItemId: PropTypes.string,
    toggleOpenItem: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (!this.props.loaded && !this.props.loading) {
      this.props.getAllRequest()
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
              to={`/article/${article.id}`}
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
    return { events: state[eventsModuleName].entities }
  },
  { getAllRequest } // map reducer function to props
)(EventList)

import React, { Component, PureComponent } from "react"
import { connect } from "react-redux"
import { deleteArticle } from "../../AC"
import PropTypes from "prop-types"
import CommentList from "../CommentList"
import Loader from "../Loader"
import common from "common" // common library

import { CSSTransition } from "react-transition-group"
import "./index.less"

class Article extends Component {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string,
    }).isRequired,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func,
  }

  constructor(props) {
    super(props)
  }

  getBody() {
    const { article, isOpen } = this.props
    return (
      <section>
        {article.text}
        <CommentList article={article} />
      </section>
    )
  }

  /*
   * build virtual DOM
   */
  render() {
    /*
     * here we have actual DOM node
     */
    function processNode(articleNode) {
      //console.log('article node:', articleNode);
    }
    /*
     * onCloseClick - for change parent state (reverse data flow)
     */
    const { article, isOpen, onCloseClick, toggleOpen } = this.props

    // <button onClick={onCloseClick}>{isOpen ? 'Close' : 'Open'}</button>
    //
    return (
      <div className="article" ref={processNode}>
        <p>{article.title}</p>
        <button onClick={toggleOpen}>{isOpen ? "Close" : "Open"}</button>
        <button onClick={this.handleDelete}>
          <common.LocalizedText>delete me</common.LocalizedText>
        </button>

        <CSSTransition
          in={isOpen}
          timeout={300}
          classNames="article-body"
          unmountOnExit
        >
          <div>{this.getBody()}</div>
        </CSSTransition>
      </div>
    )
  }

  /*
   * call when parent component rebuilding children because parent state was
   * changed
   */
  componentWillReceiveProps(nextProps) {
  }

  handleDelete = () => {
    console.log("delete article")
    this.props.deleteArticle(this.props.article)
  }

  /*
   *
   * override it for:
   * - get some component data from server
   *   TODO: if function return promise ->
   *   'return new Promise(function(resolve, reject)'
   *   then render will not be wait resolving this promise.
   *   Question: how should we get data before call render?
   */
  componentWillMount() {}

  /*
   * after build component in DOM
   */
  componentDidMount() {}

  /*
   * manual control updating.
   * This method is overrided in PureComponent
   * wich compare nextProps and nextState with this.props and this.state
   */
  //shouldComponentUpdate(nextProps, nextState) {
  //return this.state.isOpen !== nextState.isOpen;
  //}

  /*
   * before upate component
   */
  componentWillUpdate(nextProps, nextState) {}

  /*
   * after build DOM
   */
  componentDidUpdate(prevProps, prevState) {}

  /*
   * befor component distroy
   */
  componentWillUnmount() {}
}

export default connect(
  null,
  { deleteArticle }, // map reducer function to props
  null,
  {pure: false}
)(common.toggleOpen(Article))

import React, {Component, PureComponent} from 'react';
import PropTypes from 'prop-types';
import CommentList from '../CommentList';
import toggleOpen from '../../decorators/toggleOpen';

class Article extends PureComponent {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string,
    }).isRequired,
  };

  constructor(props) {
    super(props);
  }

  /*
   * build virtual DOM
   */
  render() {
    /*
     * here we have actual DOM node
    */
    function processNode(articleNode) {
      console.log("article node:", articleNode);
    }
    /*
     * onCloseClick - for change parent state (reverse data flow)
     */
    const {article, isOpen, onCloseClick, toggleOpen} = this.props;

    let bodyStyle = {
      fontSize: '12px',
      display: 'none',
    };
    if (isOpen) {
      delete bodyStyle.display;
    }

    // <button onClick={onCloseClick}>{isOpen ? 'Close' : 'Open'}</button>
    return (
      <div className="Article" ref={processNode}>
        <p>{article.title}</p>
        <button onClick={toggleOpen}>{isOpen ? 'Close' : 'Open'}</button>
        <section style={bodyStyle}>
          {article.text}
          <CommentList comments={article.comments} />
        </section>
        create date: {new Date().toDateString()}
      </div>
    );
  }

  //close = () => {
  //this.setState({
  //isOpen: !this.state.isOpen,
  //});
  //};

  /*
   *
   * override it for:
   * - get some component data from server
   *   TODO: if function return promise ->
   *   'return new Promise(function(resolve, reject)'
   *   then render will not be wait resolving this promise.
   *   Question: how should we get data before call render?
   */
  componentWillMount() {
    //console.log('Article will mount');
    // TODO: case 1
    //async function getArticle() {
    //let p = new Promise(function(resolve, reject) {
    //setTimeout(() => {
    //console.log('Article data has been recieved');
    //resolve('article data');
    //}, 1000);
    //});
    //let result = await p;
    //console.log(result);
    //}
    //getArticle();
    // TODO: case 2
    //return new Promise(function(resolve, reject) {
    //setTimeout(() => {
    //console.log('Article data has been recieved');
    //resolve('article data');
    //}, 1000);
    //});
    // TODO: case 3 (use generators)
  }

  /*
   * after build component in DOM
   */
  componentDidMount() {
    //console.log('Article was build in DOM');
  }

  /*
   * call when parent component rebuilding children because parent state was
   * changed
   */
  componentWillReceiveProps(nextProps) {
    //console.log('Article will receive props: ', nextProps);
    //if (nextProps.defaultOpen !== this.props.defaultOpen) {
    //this.setState({isOpen: nextProps.defaultOpen});
    //}
  }

  /*
   * manual control updating.
   * This method is overrided in PureComponent
   * wich compare nextProps and nextState with this.props and this.state
   */
  //shouldComponentUpdate(nextProps, nextState) {
  ////console.log(
  ////'Article shouldComponentUpdate nextProps:',
  ////nextProps,
  ////'nextState:',
  ////nextState,
  ////);

  //return this.state.isOpen !== nextState.isOpen;
  //}

  /*
   * before upate component
   */
  componentWillUpdate(nextProps, nextState) {
    //console.log(
    //'Article componentWillUpdate nextProps:',
    //nextProps,
    //'nextState:',
    //nextState,
    //);
  }

  /*
   * after build DOM
   */
  componentDidUpdate(prevProps, prevState) {
    //console.log(
    //'Article componentDidUpdate prevProps:',
    //prevProps,
    //'prevState:',
    //prevState,
    //);
  }

  /*
   * befor component distroy
   */
  componentWillUnmount() {
    //console.log('Article componentWillUnmount');
  }
}

export default toggleOpen(Article);
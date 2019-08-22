import React, {Component, PureComponent} from 'react';

class Article extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: props.defaultOpen,
    };
    console.log('Article props', this.props);
  }

  close = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
    console.log('onClickHandler');
  };

  /*
   * override it for:
   * - get some component data from server
   *   TODO: if function return promise ->
   *   'return new Promise(function(resolve, reject)'
   *   then render will not be wait resolving this promise.
   *   Question: how should we get data before call render?
   */
  componentWillMount() {
    console.log('Article will mount');

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

    return new Promise(function(resolve, reject) {
      setTimeout(() => {
        console.log('Article data has been recieved');
        resolve('article data');
      }, 1000);
    });
  }

  /*
   * after build component in DOM
   */
  componentDidMount() {
    console.log('Article was build in DOM');
  }

  /*
   * call when parent component rebuilding children because parent state was
   * changed
   */
  componentWillReceiveProps(nextProps) {
    //console.log('Article will receive props: ', nextProps);
    if (nextProps.defaultOpen !== this.props.defaultOpen) {
      this.setState({isOpen: nextProps.defaultOpen});
    }
  }

  /*
   * manual control updating
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
    console.log(
      'Article componentWillUpdate nextProps:',
      nextProps,
      'nextState:',
      nextState,
    );
  }

  /*
   * after build DOM
   */
  componentDidUpdate(prevProps, prevState) {
    console.log(
      'Article componentDidUpdate prevProps:',
      prevProps,
      'prevState:',
      prevState,
    );
  }

  /*
   * befor component distroy
   */
  componentWillUnmount() {
    console.log('Article componentWillUnmount prevProps:');
  }

  /*
   * build virtual DOM
   */
  render() {
    console.log('render Article');
    let article = this.props.article;

    let bodyStyle = {
      fontSize: '12px',
      display: 'none',
    };
    if (this.state.isOpen) {
      delete bodyStyle.display;
    }

    return (
      <div className="Article">
        <p>{article.title}</p>
        <button onClick={this.close}>
          {this.state.isOpen ? 'Close' : 'Open'}
        </button>
        <section style={bodyStyle}>{article.text}</section>
        create date: {new Date().toDateString()}
      </div>
    );
  }
}

export default Article;

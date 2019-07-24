import React, {Component} from 'react';

function onClickHandler() {
  console.log("onClickHandler");
}

class Article extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: true
    };
  }

  render() {
    console.log('props', this.props);
    let {article} = this.props;
    const body = <section style={{fontSize: '12px'}}>{article.text}</section>;
    return (
      <div className="Article">
        <p>{article.title}</p>
        <button onClick={onClickHandler}>Close</button>
        {body}
        create date: {new Date().toDateString()}
      </div>
    );
  }
}


export default Article;

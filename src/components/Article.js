import React, {Component} from 'react';

class Article extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: true,
    };
    console.log('props', this.props);
  }

  close = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
    console.log('onClickHandler');
  };

  render() {
    let article = this.props.article;

    let bodyStyle = {
      fontSize: '12px',
      display: 'none',
    };
    if (this.state.isOpen) {
      delete bodyStyle.display;
    }

    const body = <section style={bodyStyle}>{article.text}</section>;
    return (
      <div className="Article">
        <p>{article.title}</p>
        <button onClick={this.close}>
          {this.state.isOpen ? 'Close' : 'Open'}
        </button>
        {body}
        create date: {new Date().toDateString()}
      </div>
    );
  }
}

export default Article;

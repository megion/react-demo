import React, {Component} from 'react';
import Article from '../Article';
import './index.less';

class ArticleList extends Component {
  constructor(props) {
    super(props);

    /*
     * Store children component state in parent.
     * Article state parameter 'open' is passed to children by prop 'isOpen'
     * This approach is called State Lifting.
     */
    this.state = {
      openArticleId: null,
    };
  }

  /*
   * Function is passed to the children components.
   * This approach is called Reverse Data Flow.
   */
  closeArticle = articleId => {
    let openArticleId = articleId;
    // if already open - close it (all will be closed)
    if (this.state.openArticleId === articleId) {
      openArticleId = null;
    }
    this.setState({openArticleId: openArticleId});
  };

  render() {
    const articleElements = this.props.articles.map((article, index) => {
      return (
        <li className="article-list__li" key={article.id}>
          <Article
            article={article}
            isOpen={this.state.openArticleId === article.id}
            onCloseClick={this.closeArticle.bind(this, article.id)}
          />
        </li>
      );
    });

    return <ul className="article-list">{articleElements}</ul>;
  }
}

export default ArticleList;

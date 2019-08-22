import React, {Component} from 'react';
import Article from '../Article';
import './index.less';

class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.articles = props.articles;
  }

  render() {
    return <ul className="article-list">{this.buildArticleElements()}</ul>;
  }

  buildArticleElements = () => {
    const articleElements = this.articles.map((article, index) => {
      return (
        <li className="article-list__li" key={article.id}>
          <Article article={article} defaultOpen={index === 0} />
        </li>
      );
    });

    return articleElements;
  };
}

export default ArticleList;

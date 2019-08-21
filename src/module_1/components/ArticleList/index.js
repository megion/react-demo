import React, {Component} from 'react';
import Article from '../Article';
import './index.less';

class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.articles = props.articles;
  }

  render() {
    const articleElements = this.articles.map(article => {
      return (
        <li className="article-list__li" key={article.id}>
          <Article article={article} />
        </li>
      );
    });
    return <ul className="article-list">{articleElements}</ul>;
  }
}

export default ArticleList;

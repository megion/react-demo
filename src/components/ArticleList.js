import React, {Component} from 'react';
import Article from './Article';

class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.articles = props.articles;
  }

  render() {
    const articleElements = this.articles.map(article => {
      return <li key={article.id}><Article article={article}/></li>
    });
    return (
      <ul className="ArticleList">
          {articleElements}
      </ul>
    );
  }
}

export default ArticleList;

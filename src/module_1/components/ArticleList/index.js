import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Article from '../Article';
import './index.less';
import common from 'common'; // common library

class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    // from accordion
    openItemId: PropTypes.string,
    toggleOpenItem: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {articles, openItemId, toggleOpenItem} = this.props;
    const articleElements = articles.map((article, index) => {
      return (
        <li className="article-list__li" key={article.id}>
          <Article
            article={article}
            isOpen={openItemId === article.id}
            onCloseClick={toggleOpenItem(article.id, event)}
          />
        </li>
      );
    });

    return <ul className="article-list">{articleElements}</ul>;
  }
}

export default common.accordion(ArticleList);

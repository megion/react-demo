import React from 'react';

function Article() {
  const body = <section>body</section>;
  return (
    <div className="Article">
      <p>Article</p>
      {body}
      create date: {new Date().toDateString()}
    </div>
  );
}

export default Article;

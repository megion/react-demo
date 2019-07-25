import React from 'react';
import ArticleList from './components/ArticleList';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import articles from './fixtures';

function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>

      <div>
        <p>Article list:</p>
        <ArticleList articles={articles}/>
      </div>

    </div>
  );
}

export default App;

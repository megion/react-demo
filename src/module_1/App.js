import React, {Component} from 'react';
import ArticleList from './components/ArticleList';
import UserForm from './components/UserForm';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import articles from './fixtures';

class App extends Component {
  constructor(props) {
    super(props);

    console.log('App props', this.props);

    this.state = {
      reverted: false,
    };
  }

  render() {
    console.log('render state: ', this.state);

    let copyAtrticles = articles.slice();
    if (this.state.reverted) {
      copyAtrticles = copyAtrticles.reverse();
    }
    return (
      <div className="App container">
        <UserForm articles={copyAtrticles} />
        <div className="jumbotron">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="display-3">Module 1</h1>
          <button className="btn btn-dark" onClick={this.revert}>
            Revert
          </button>
        </div>

        <div>
          <p>Article list:</p>
          <ArticleList articles={copyAtrticles} />
        </div>
      </div>
    );
  }

  revert = () => {
    this.setState({
      reverted: !this.state.reverted,
    });
  };
}

export default App;

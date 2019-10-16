import React, { Component } from "react"
import ArticleList from "./components/ArticleList"
import UserForm from "./components/UserForm"
import Counter from "./components/Counter"
import logo from "./logo.svg"
import "./App.less"
import "bootstrap/dist/css/bootstrap.css"
import store from "./store"

import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      reverted: false,
    }
  }

  render() {
    return (
      <Router>
        <div className="App container">
          <ul>
            <li>
              <NavLink to="/" activeClassName="app-link_active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/counter" activeClassName="app-link_active">
                Counter
              </NavLink>
            </li>
            <li>
              <NavLink to="/articles" activeClassName="app-link_active">
                ArticleList
              </NavLink>
            </li>
            <li>
              <NavLink to="/user-form" activeClassName="app-link_active">
                UserForm
              </NavLink>
            </li>
          </ul>

          <hr />

          {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
          <Switch>
            <Route exact path="/">
              <div className="jumbotron">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="display-3">Module 1</h1>
                <button className="btn btn-dark" onClick={this.revert}>
                  Revert
                </button>
              </div>
            </Route>

            <Route exact path="/user-form">
              <UserForm />
            </Route>

            <Route path="/counter">
              <Counter />
            </Route>

            <Route path="/articles">
              <div>
                <p>Article list:</p>
                <ArticleList />
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }

  revert = () => {
    this.setState({
      reverted: !this.state.reverted,
    })
  }
}

export default App

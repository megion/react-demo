import React, { Component } from "react"
import ArticleList from "./components/ArticleList"
import UserForm from "./components/UserForm"
import Counter from "./components/Counter"
import ArticlePage from "./routes/ArticlePage"
import SignUpPage from "./routes/SignUpPage"
import SignInPage from "./routes/SignInPage"
import logo from "./logo.svg"
import "./App.less"
import "bootstrap/dist/css/bootstrap.css"
import common from "common" // common library
import { Provider as UserProvider } from "./context/user"

import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useParams,
} from "react-router-dom"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      reverted: false,
      language: "en",
    }
  }

  render() {
    return (
      <Router>
        <UserProvider value="blabla user">
          <common.LangProvider language={this.state.language}>
            <div className="App container">
              <ul>
                <li>
                  <a onClick={this.changeLanguage("ru")}>Russian</a>
                </li>
                <li>
                  <a onClick={this.changeLanguage("en")}>English</a>
                </li>
              </ul>
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
                <li>
                  <NavLink to="/sign-in" activeClassName="app-link_active">
                    Sign in
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/sign-up" activeClassName="app-link_active">
                    Sign up
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

                <Route path="/counter" render={this.getCounter}></Route>

                <Route path="/articles">
                  <div>
                    <p>Article list:</p>
                    <ArticleList />
                  </div>
                </Route>

                <Route path="/article/:id">
                  <ArticlePage />
                </Route>

                <Route path="/sign-up">
                  <SignUpPage />
                </Route>

                <Route path="/sign-in">
                  <SignInPage />
                </Route>

                <Route
                  exact
                  path="/comments/:page"
                  render={this.getCommentsForPage}
                />
                <Route path="*" render={this.getNotFound} />
              </Switch>
            </div>
          </common.LangProvider>
        </UserProvider>
      </Router>
    )
  }

  revert = () => {
    this.setState({
      reverted: !this.state.reverted,
    })
  }

  changeLanguage = language => ev => {
    this.setState({ language })
  }

  getCounter = ({ match }) => {
    return <Counter />
  }

  getNotFound = () => {
    return <div>Not Found</div>
  }

  getCommentsForPage = () => {
    return <div>Comments for page</div>
  }
}

export default App

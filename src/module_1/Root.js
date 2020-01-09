import React, {Component} from 'react';
import { Provider } from "react-redux"
import App from "./App"
import store from "./store"
// initialize firebase
import "../firebase"

function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default Root;

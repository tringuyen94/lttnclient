import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import { Provider } from "react-redux"
import { rootReducer } from "./redux/reducers/root.reducers"
import { BrowserRouter } from "react-router-dom"
import * as serviceWorker from "./serviceWorker"
const initialState = {}
const middlewares = [thunk]
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middlewares)
    //window.__REDUX_DEVTOOLS_EXTENSION_  _ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

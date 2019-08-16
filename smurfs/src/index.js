import React from "react";
import ReactDOM from "react-dom";

///redux
import { createStore, applyMiddleware } from "redux";

///react-redux
import { Provider } from "react-redux";

//thunk
import thunk from "redux-thunk";

//style
import "./index.css";

//reducer
import { reducer }  from './components/store/reducer'

//component
import App from "./components/App";

///store
const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
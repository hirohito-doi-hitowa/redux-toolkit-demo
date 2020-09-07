import React from "react";
import ReactDOM from "react-dom";
import "./css/main.css";
import Post from "./components/Post";
import store from "./store/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Post />
    </Provider>
  </React.StrictMode>,
  document.getElementById("app")
);

if (module.hot) {
  // enables hot module replacement if plugin is installed
  module.hot.accept();
}

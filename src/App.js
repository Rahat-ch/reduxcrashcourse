import React from "react";
import "./App.css";
import { Provider } from "react-redux";

import Posts from "./components/Posts";
import PostForm from "./components/PostForm";
import { createStore, applyMiddleware } from "redux";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <PostForm />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;

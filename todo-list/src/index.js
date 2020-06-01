import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

import constants from "./constants";
import { Provider } from "react-redux";
import TodoApp from "./TodoApp";
import rootReducer from "./redux/rootReducer";

const store = createStore(rootReducer, {
  todoItems: [
    {
      id: 1,
      description: 'Item 1',
      completed: false
    },
    {
      id: 2,
      description: 'Item 2',
      completed: true
    },
    {
      id: 3,
      description: 'Item 3',
      completed: false
    },
  ],
  todoFilter: constants.filterOptions.VIEW_ALL,
});
const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  rootElement
);

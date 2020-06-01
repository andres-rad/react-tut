import React from 'react';

import TodoList from './components/TodoList/TodoList';
import TodoListFilter from './components/TodoListFilter/TodoListFilter';

function TodoApp() {
  return (
    <div>
      <TodoList/>
      <TodoListFilter/>
    </div>
  );
}

export default TodoApp;

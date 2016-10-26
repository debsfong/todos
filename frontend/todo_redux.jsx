import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { requestTodos } from './actions/todo_actions';
import allTodos from './reducers/selector';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const rootEl = document.getElementById('content');
  ReactDOM.render(<Root store={store}/>, rootEl);
  window.store = store;
  window.requestTodos = requestTodos;
  window.allTodos = allTodos;
});

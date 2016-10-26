import { RECEIVE_TODOS, REQUEST_TODOS } from '../actions/todo_actions';
import { merge } from 'lodash';

const defaultState = {
  "1": {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  "2": {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  },
};

const TodosReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case REQUEST_TODOS:
      return newState;
    case RECEIVE_TODOS:
      let newState = {};
      action.todos.forEach(todo => (newState[todo.id] = todo));
      return newState;
    default:
      return state;
  }
};

export default TodosReducer;

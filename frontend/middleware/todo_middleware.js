import { REQUEST_TODOS, receiveTodos, RECEIVE_TODOS } from '../actions/todo_actions';
import { fetchTodos } from '../util/todo_api_util';

const todoMiddleware = ({ todos, dispatch }) => next => action => {
  switch (action.type) {
    case REQUEST_TODOS:
      const success = (data) => {
        dispatch(receiveTodos(data));
      };
      const error = e => console.log(e);
      fetchTodos(success, error);
      break;
    default:
      return next(action);
  }
};

export default todoMiddleware;

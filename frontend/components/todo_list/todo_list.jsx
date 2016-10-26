import React from 'react';
import {requestTodos} from '../../actions/todo_actions';

class todoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.store.dispatch(requestTodos());
  }

  render() {
    const todoItems = this.props.todos.map((todo, idx) => (
      <li key={idx} todo={todo}>{todo.title}</li>
    ));

    return (
      <div>
        <ul>{todoItems}</ul>
      </div>
    );

  }

}

export default todoList;

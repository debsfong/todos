const allTodos = (state) => {
  let todos = Object.keys(state.todos).map( id => state.todos[id] );
  return todos;
};

export default allTodos;

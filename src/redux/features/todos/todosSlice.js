// actions
export const addTodo = (todo) => {
  return {
    type: "todo/addTodo",
    payload: todo,
  };
};

// reducer
const initialTodos = [{ id: "123", title: "First item" }];

export const todosReducer = (state = initialTodos, action) => {
  switch (action.type) {
    case "todos/addTodo":
      return [...state.todos, action.payload];
    default:
      return state;
  }
};

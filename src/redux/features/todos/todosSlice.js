// reducer
const initialTodos = [{ id: "123", title: "First item" }];

export const todosReducer = (state = initialTodos, action) => {
  switch (action.type) {
    case "todos/addTodo":
      return [...state, action.payload];
    case "todos/updateTodo":
      return state.map((todo) => {
        if (todo.id == action.payload.selectedItemId) {
          return action.payload.todo;
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

// actions
export const addTodo = (todo) => {
  return {
    type: "todos/addTodo",
    payload: todo,
  };
};

export const updateTodo = (todo, selectedItemId) => {
  return {
    type: "todos/updateTodo",
    payload: { todo, selectedItemId },
  };
};

// selectors
export const selectTodos = (state) => state.todos;

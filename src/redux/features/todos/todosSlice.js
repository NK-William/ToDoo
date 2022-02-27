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
    case "todos/deleteTodo":
      return state.filter((todo) => todo.id != action.payload);
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

export const deleteTodo = (selectedItemId) => {
  console.log("testttttt");
  return {
    type: "todos/deleteTodo",
    payload: selectedItemId,
  };
};

// selectors
export const selectTodos = (state) => state.todos;

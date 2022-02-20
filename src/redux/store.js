import { createStore } from "redux";

// const initialTodos = [{ id: "123", title: "First item" }];
const initialTodos = [];

const todosReducer = (state = initialTodos, action) => {
  switch (action.type) {
    case "todos/addTodo":
      return [...state.todos, action.payload];
    default:
      state;
  }
};

const initialSearchValue = "";

const searchReducer = (state = initialSearchValue, action) => {
  switch (action.type) {
    case "searchValue/setSearchValue":
      return action.payload;
    default:
      state;
  }
};

const initialState = {
  todos: [{ id: "123", title: "First item" }],
  searchValue: "",
};
const rootReducer = (state = initialState, action) => {
  const nextState = {
    todos: todosReducer(state.todos, action),
    searchValue: searchReducer(state.todo, action),
  };
  return nextState;
};

export const store = createStore(rootReducer);

// action creators
const addTodo = (todo) => {
  return {
    type: "todo/addTodo",
    payload: todo,
  };
};

const setSearchValue = (value) => {
  return {
    type: "searchValue/setSearchValue",
    payload: value,
  };
};

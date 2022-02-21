import { createStore, combineReducers } from "redux";

// const initialTodos = [{ id: "123", title: "First item" }];
const initialTodos = [{ id: "123", title: "First item" }];

const todosReducer = (state = initialTodos, action) => {
  switch (action.type) {
    case "todos/addTodo":
      return [...state.todos, action.payload];
    default:
      return state;
  }
};

const initialSearchValue = "";

const searchReducer = (state = initialSearchValue, action) => {
  switch (action.type) {
    case "searchValue/setSearchValue":
      return action.payload;
    default:
      return state;
  }
};

const reducers = {
  todos: todosReducer,
  searchValue: searchReducer,
};

const rootReducer = combineReducers(reducers);

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

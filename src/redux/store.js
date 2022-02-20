// Import createStore here
import { createStore } from "redux";

const initialState = {
  todo: [{ id: "123", title: "First item" }],
  searchValue: "",
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todo/addTodo":
      return { ...state, todo: [...state.todo, action.payload] };
    case "searchValue/setSearchValue":
      return { ...state, searchValue: action.payload };
  }
};

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

const store = createStore(todoReducer);

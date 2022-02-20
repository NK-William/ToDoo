// Import createStore here
import { createStore } from "redux";

const initialState = {
  todo: { id: "123", title: "First item" },
  searchValue: "",
};
const countReducer = (state = initialState, action) => {
  return state;
};

// Create the store here
const store = createStore(countReducer);

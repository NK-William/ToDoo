// actions
export const setSearchValue = (value) => {
  return {
    type: "searchValue/setSearchValue",
    payload: value,
  };
};

//reducer
const initialSearchValue = "";

export const searchReducer = (state = initialSearchValue, action) => {
  switch (action.type) {
    case "searchValue/setSearchValue":
      return action.payload;
    default:
      return state;
  }
};

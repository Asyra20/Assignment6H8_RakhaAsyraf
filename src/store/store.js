import { createStore } from "redux";

const initialState = {
  searchTerm: "Hulk",
  movies: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SEARCH_TERM":
      return { ...state, searchTerm: action.payload };
    case "SET_MOVIES":
      return { ...state, movies: action.payload };
    default:
      return state;
  }
};

const store = createStore(movieReducer);

export default store;

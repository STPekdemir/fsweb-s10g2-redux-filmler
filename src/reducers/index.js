import { combineReducers } from "redux";
import favReducer from "./favoriteReducer";
import movieReducer from "./movieReducer";

const rootReducer = combineReducers({
  moviess: movieReducer,
  favorites: favReducer,
});

export default rootReducer;

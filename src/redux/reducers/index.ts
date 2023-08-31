import { combineReducers } from "redux";
import movieReducer from "./MoviesReducer";

// Combine all reducers as root reducer
export default combineReducers({
  movieReducer,

});

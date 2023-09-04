/* eslint-disable @typescript-eslint/ban-types */
import {
  GET_MOVIE_LIST,
} from "../constants/action-types";
import { MovieListAPIResponse } from "./MovieActions";

export * from "./MovieActions";

export type ActionTypes =
  // | { type: typeof GET_MOVIE_LIST.GET_MOVIE_LIST_INITLIZATION; payload: MovieListAPIResponse }
  | { type: typeof GET_MOVIE_LIST.GET_MOVIE_LIST_SUCCESS; payload: MovieListAPIResponse }
  // | { type: typeof GET_MOVIE_LIST.GET_MOVIE_LIST_ERORR; payload: MovieListAPIResponse }

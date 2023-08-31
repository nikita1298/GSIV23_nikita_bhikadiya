/* eslint-disable @typescript-eslint/ban-types */
import {
  GET_MOVIE_LIST,
} from "../constants/action-types";
import { MovieData } from "../Actions";

export * from "./MovieActions";

export type ActionTypes =
  | { type: typeof GET_MOVIE_LIST.GET_MOVIE_LIST_INITLIZATION; payload: MovieData[] }
  | { type: typeof GET_MOVIE_LIST.GET_MOVIE_LIST_SUCCESS; payload: MovieData[] }
  | { type: typeof GET_MOVIE_LIST.GET_MOVIE_LIST_ERORR; payload: MovieData[] }

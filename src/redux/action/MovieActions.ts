import { apiCall, METHOD } from "../../APIServices/baseApiCall";
import { GET_MOVIE_CAST_DETAIL, GET_MOVIE_DETAIL, GET_MOVIE_LIST, SEARCH_MOVIE_LIST, SET_IS_SEARCH } from "../constants/action-types";
import { Store } from "../Actions";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { AxiosError, AxiosResponse } from "axios";
import {
  MOVIE_ARTIST_DETAIL_URL,
  MOVIE_DETAIL_URL,
  MOVIE_LIST_URL,
  SEARCH_MOVIE_LIST_URL,
} from "../../APIServices/apiEndPoints";

export interface MovieListAPIResponse {
  dates: Object,
  page: Number,
  results: Object,
  total_pages: Number
  total_results: Number
}

export const setSearch =
  (isSearch = true): ThunkAction<void, Store, unknown, Action<string>> =>
    (dispatch) => {
      dispatch({
        type: SET_IS_SEARCH,
        payload: isSearch
      })
    }

export const getMovieListInit =
  (showToast = true, page: number): ThunkAction<void, Store, unknown, Action<string>> =>
    (dispatch) => {
      dispatch({
        type: GET_MOVIE_LIST.GET_MOVIE_LIST_INITLIZATION,
      });

      apiCall(
        MOVIE_LIST_URL + page,
        {},
        (res: MovieListAPIResponse) => dispatch(getMovieListSuccess(res)),
        (err: AxiosError) => {
          console.log("Error", err);
          dispatch(getMovieListError());
        },
        METHOD.GET,
        { showToast }
      );
    };

export const getMovieListSuccess =
  (res: MovieListAPIResponse): ThunkAction<void, Store, unknown, Action<string>> =>
    (dispatch) => {
      dispatch({
        type: GET_MOVIE_LIST.GET_MOVIE_LIST_SUCCESS,
        payload: res,
      });
    };

export const getMovieListError =
  (): ThunkAction<void, Store, unknown, Action<string>> => (dispatch) => {
    dispatch({
      type: GET_MOVIE_LIST.GET_MOVIE_LIST_ERORR,
    });
  };

export const getMovieDetailInit =
  (
    showToast = true,
    id: Number
  ): ThunkAction<void, Store, unknown, Action<string>> =>
    (dispatch) => {
      dispatch({
        type: GET_MOVIE_DETAIL.GET_MOVIE_DETAIL_INITLIZATION,
      });

      const url = MOVIE_DETAIL_URL.replace("movie_id", id.toString())

      apiCall(
        url, //MOVIE_DETAIL_URL,
        { movie_id: id },
        (res: AxiosResponse) => dispatch(getMovieDetailSuccess(res)),
        (err: AxiosError) => {
          console.log("Error", err);
          dispatch(getMovieDetailError());
        },
        METHOD.GET,
        { showToast }
      );
    };

export const getMovieDetailSuccess =
  (res: Object): ThunkAction<void, Store, unknown, Action<string>> =>
    (dispatch) => {
      dispatch({
        type: GET_MOVIE_DETAIL.GET_MOVIE_DETAIL_SUCCESS,
        payload: res,
      });
    };

export const getMovieDetailError =
  (): ThunkAction<void, Store, unknown, Action<string>> => (dispatch) => {
    dispatch({
      type: GET_MOVIE_DETAIL.GET_MOVIE_DETAIL_ERORR,
    });
  };


export const getMovieCastDetailInit =
  (
    showToast = true,
    id: Number
  ): ThunkAction<void, Store, unknown, Action<string>> =>
    (dispatch) => {
      dispatch({
        type: GET_MOVIE_CAST_DETAIL.GET_MOVIE_CAST_DETAIL_INITLIZATION,
      });

      const url = MOVIE_ARTIST_DETAIL_URL.replace("movie_id", id.toString())

      apiCall(
        url, //MOVIE_DETAIL_URL,
        { movie_id: id },
        (res: Object) => dispatch(getMovieCastDetailSuccess(res)),
        (err: AxiosError) => {
          console.log("Error", err);
          dispatch(getMovieCastDetailError());
        },
        METHOD.GET,
        { showToast }
      );
    };

export const getMovieCastDetailSuccess =
  (res: Object): ThunkAction<void, Store, unknown, Action<string>> =>
    (dispatch) => {
      dispatch({
        type: GET_MOVIE_CAST_DETAIL.GET_MOVIE_CAST_DETAIL_SUCCESS,
        payload: res,
      });
    };

export const getMovieCastDetailError =
  (): ThunkAction<void, Store, unknown, Action<string>> => (dispatch) => {
    dispatch({
      type: GET_MOVIE_CAST_DETAIL.GET_MOVIE_CAST_DETAIL_ERORR,
    });
  };



export const searchMovieListInit =
  (showToast = true, text: string): ThunkAction<void, Store, unknown, Action<string>> =>
    (dispatch) => {
      dispatch({
        type: SEARCH_MOVIE_LIST.SEARCH_MOVIE_LIST_INITLIZATION,
      });
      const search_url = SEARCH_MOVIE_LIST_URL.replace("text", text)
      apiCall(
        search_url,
        {
          query: text
        },
        (res: MovieListAPIResponse) => dispatch(searchMovieListSuccess(res)),
        (err: AxiosError) => {
          console.log("Error", err);
          dispatch(searchMovieListError());
        },
        METHOD.GET,
        { showToast }
      );
    };

export const searchMovieListSuccess =
  (res: MovieListAPIResponse): ThunkAction<void, Store, unknown, Action<string>> =>
    (dispatch) => {
      dispatch({
        type: SEARCH_MOVIE_LIST.SEARCH_MOVIE_LIST_SUCCESS,
        payload: res,
      });
    };

export const searchMovieListError =
  (): ThunkAction<void, Store, unknown, Action<string>> => (dispatch) => {
    dispatch({
      type: SEARCH_MOVIE_LIST.SEARCH_MOVIE_LIST_ERORR,
    });
  };
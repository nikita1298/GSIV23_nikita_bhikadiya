import { GET_MOVIE_CAST_DETAIL, GET_MOVIE_DETAIL, GET_MOVIE_LIST, SEARCH_MOVIE_LIST, SET_IS_SEARCH } from "../constants/action-types";
import { MovieData } from "../Actions";
import { ActionTypes } from "../action";

const initialState = {
  progress: false,
  isLoading: false,
  onSaveLoading: false,
  movieList: [],
  total_pages: 0,
  movieDetail: {
    id: "0",
    name: "",
    poster_path: "",
    title: "",
    vote_average: "",
    release_date: "",
    runtime: "",
    overview: "",
    original_title: "",

  },
  movieCastDetail: {
    cast: [],
    crew: []
  },
  isSearch: false
};

const movieReducer = (state: MovieData = initialState, action: ActionTypes) => {
  switch (action.type) {
    case SET_IS_SEARCH:
      return { ...state, isSearch: action.payload, movieList: [], total_pages: 1 };

    case GET_MOVIE_LIST.GET_MOVIE_LIST_INITLIZATION:
      return { ...state, isLoading: true };
    case GET_MOVIE_LIST.GET_MOVIE_LIST_SUCCESS:
      const movies1: any = action.payload;
      return {
        ...state, movieList: [...state.movieList, ...movies1.results], total_pages: movies1.total_pages, isLoading: false
      };

    case GET_MOVIE_LIST.GET_MOVIE_LIST_ERORR:
      return { ...state, movieList: [], isLoading: false };

    case SEARCH_MOVIE_LIST.SEARCH_MOVIE_LIST_INITLIZATION:
      return { ...state, isLoading: true };
    case SEARCH_MOVIE_LIST.SEARCH_MOVIE_LIST_SUCCESS:
      const movies: any = action.payload;
      return {
        ...state, movieList: [...state.movieList, ...movies.results], total_pages: movies.total_pages, isLoading: false
      };
    case SEARCH_MOVIE_LIST.SEARCH_MOVIE_LIST_ERORR:
      return { ...state, movieList: [], isLoading: false };


    case GET_MOVIE_DETAIL.GET_MOVIE_DETAIL_INITLIZATION:
      return { ...state, movieDetail: {}, isLoading: true };
    case GET_MOVIE_DETAIL.GET_MOVIE_DETAIL_SUCCESS:
      return { ...state, movieDetail: action.payload, isLoading: false };
    case GET_MOVIE_DETAIL.GET_MOVIE_DETAIL_ERORR:
      return { ...state, movieDetail: {}, isLoading: false };

    case GET_MOVIE_CAST_DETAIL.GET_MOVIE_CAST_DETAIL_INITLIZATION:
      return {
        ...state, movieCastDetail: {
          cast: [],
          crew: []
        }, isLoading: true
      };
    case GET_MOVIE_CAST_DETAIL.GET_MOVIE_CAST_DETAIL_SUCCESS:
      return { ...state, movieCastDetail: action.payload, isLoading: false };
    case GET_MOVIE_CAST_DETAIL.GET_MOVIE_CAST_DETAIL_ERORR:
      return {
        ...state, movieCastDetail: {
          cast: [],
          crew: []
        }, isLoading: false
      };


    default:
      return state;
  }
};

export default movieReducer;

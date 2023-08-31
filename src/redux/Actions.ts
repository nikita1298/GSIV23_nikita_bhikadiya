/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
export interface MovieData {
  progress: boolean;
  isLoading: boolean;
  total_pages:number;
  onSaveLoading: boolean;
  movieList: TMovieList[];
  movieDetail:TMovieList;
  movieCastDetail:MovieCastDetail;
  isSearch:boolean
 }

export type TMovieList = {
  id:string;
  name:string;
  poster_path:string;
  title:string;
  vote_average:string;
  release_date:string;
  runtime:string;
  overview:string;
  original_title:string;
};

export interface CAST {
  name:string;
  job:string;
  department:string;
}

 export interface MovieCastDetail {
  cast:Array<CAST>;
  crew:Array<CAST>;
 }

 export interface Store {
  movieReducer: MovieData;
 }
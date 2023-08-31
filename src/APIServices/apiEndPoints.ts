export const MOVIE_LIST_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&page=`;
export const SEARCH_MOVIE_LIST_URL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=text`;
export const MOVIE_DETAIL_URL = `https://api.themoviedb.org/3/movie/movie_id?api_key=${process.env.REACT_APP_API_KEY}`;

export const MOVIE_ARTIST_DETAIL_URL = `https://api.themoviedb.org/3/movie/movie_id/credits?api_key=${process.env.REACT_APP_API_KEY}`;

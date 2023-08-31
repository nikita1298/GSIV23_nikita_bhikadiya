import { MovieList } from "../pages/MovieList";
import { MovieListDetail } from "../pages/MovieListDetail";

export const publicRoutes = [
  {
    path: "/movie",
    element: MovieList,
    search:true
  },
  {
    path: "/detail/:id",
    element: MovieListDetail,
    search:false
    
  },
];


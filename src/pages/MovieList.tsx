import React, { useEffect, useState } from "react";
import { getMovieListInit } from "../redux/action";
import { useSelector } from "react-redux";
import { Store, TMovieList } from "../redux/Actions";
import { MovieListItem } from "../components/MovieListItem";
import { Grid } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import InfiniteScroll from "react-infinite-scroll-component";
import { dispatch } from "../redux";

export const MovieList = () => {
  const moviesList: TMovieList[] =
    useSelector((state: Store) => state.movieReducer.movieList) || [];
  const isSearch: boolean =
    useSelector((state: Store) => state.movieReducer.isSearch) || false;

  const totalPages: number =
    useSelector((state: Store) => state.movieReducer.total_pages) || 1;

  const isLoading: boolean =
    useSelector((state: Store) => state.movieReducer.isLoading) || false;

  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    try {
      setPage(1);
      console.log("main call");
      if (isSearch === false) {
        dispatch(getMovieListInit(false, 1));
      }
    } catch (error: unknown) {
      //log catched error in file from here
    }
  }, [isSearch]);

  const fetchMoreData = () => {
    if (page < totalPages) {
      if (isSearch === false) {
        dispatch(getMovieListInit(false, page));
      }
      let p = page;
      setPage(p + 1);
    }
  };

  return (
    <div>
      {isLoading && page === 1 ? (
        <CircularProgress className="tp-50" />
      ) : (
        <InfiniteScroll
          dataLength={moviesList.length}
          next={fetchMoreData}
          hasMore={page < totalPages}
          loader={
            <h4>
              <CircularProgress />
            </h4>
          }
        >
          <Grid
            container
            justifyContent={"center"}
            spacing={2}
            marginTop={13}
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 1, md: 1 }}
          >
            {moviesList.length > 0 ? (
              moviesList.map((movie: TMovieList) => (
                <Grid xs={4} sm={3} lg={2} md={2} xl={3} className="movie-item">
                  <MovieListItem movie={movie} />
                </Grid>
              ))
            ) : (
              <p>No Records Found</p>
            )}
          </Grid>
        </InfiniteScroll>
      )}
    </div>
  );
};

//728ed6cfb9697edd5689450399f8e44c - API Kry

//eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjhlZDZjZmI5Njk3ZWRkNTY4OTQ1MDM5OWY4ZTQ0YyIsInN1YiI6IjY0ZTVmZjA3NTk0Yzk0MDBjNTUyNDJhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H5Yp443r_WcvPR37DRunY2pFY4_Uijdv6PqByAUfKms -Access token

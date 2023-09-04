import React, { useEffect } from "react";
import { dispatch } from "../redux";
import { getMovieCastDetailInit, getMovieDetailInit } from "../redux/action";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import { MovieCastDetail, Store } from "../redux/Actions";
import { useSelector } from "react-redux";
import { getActors, getRuntime } from "../utils/utils";
import TextTruncate from "react-text-truncate";
import CircularProgress from "@mui/material/CircularProgress";

type MovieParams = {
  id: string;
};  

type TMovieList = {
  id: string;
  name: string;
  poster_path: string;
  title: string;
  vote_average: string;
  release_date: string;
  runtime: string;
  overview: string;
  original_title: string;
};

export const MovieListDetail = () => {
  const movieDetail: TMovieList =
    useSelector((state: Store) => state.movieReducer.movieDetail) || [];

  const { cast, crew }: MovieCastDetail =
    useSelector((state: Store) => state.movieReducer.movieCastDetail) || [];

  const isLoading: boolean =
    useSelector((state: Store) => state.movieReducer.isLoading) || false;

  const movie_id: string =
    useSelector((state: Store) => state.movieReducer.movieDetail.id) || "0";

  let { id = "0" } = useParams<MovieParams>();

  useEffect(() => {
    if (parseInt(id) > 0 && parseInt(id) !== parseInt(movie_id)) {
      dispatch(getMovieCastDetailInit(true, parseInt(id)));
      dispatch(getMovieDetailInit(true, parseInt(id)));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const getDirectorName = () => {
    let directorName = "-";
    for (var i = 0; i < crew.length; i++) {
      if (
        crew[i].job.toLowerCase() === "director" &&
        crew[i].department.toLowerCase() === "directing"
      ) {
        directorName = crew[i].name;
        break;
      }
    }
    return directorName;
  };

  return (
    <div>
      {isLoading ? (
        <CircularProgress className="tp-50" />
      ) : (
        <Card sx={{ display: "flex", boxshadow: 0, margin: 5, marginTop: 13 }}>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={process.env.REACT_APP_POSTER_PATH + movieDetail?.poster_path}
            alt="Live from space album cover"
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5" textAlign={"initial"}>
                {movieDetail.title} <span> ({movieDetail.vote_average})</span>
              </Typography>
              <Typography
                textAlign="initial"
                fontSize={20}
                color="GrayText"
                component="div"
              >
                {new Date(movieDetail.release_date).getFullYear()} |{" "}
                {getRuntime(parseInt(movieDetail.runtime))} |{" "}
                {getDirectorName()}
              </Typography>
              <Typography
                textAlign="initial"
                fontSize={20}
                color="GrayText"
                component="div"
              >
                {cast.length > 0 && (
                  <>
                    Actors:
                    <TextTruncate
                      line={1}
                      element="span"
                      truncateText="…"
                      text={getActors(cast)}
                    />
                  </>
                )}
              </Typography>
              <Typography
                textAlign="initial"
                fontSize={20}
                color="GrayText"
                component="div"
              >
                Description: {movieDetail.overview}
              </Typography>

              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              ></Typography>
            </CardContent>
          </Box>
        </Card>
      )}
    </div>
  );
};

//728ed6cfb9697edd5689450399f8e44c - API Kry

//eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjhlZDZjZmI5Njk3ZWRkNTY4OTQ1MDM5OWY4ZTQ0YyIsInN1YiI6IjY0ZTVmZjA3NTk0Yzk0MDBjNTUyNDJhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H5Yp443r_WcvPR37DRunY2pFY4_Uijdv6PqByAUfKms -Access token

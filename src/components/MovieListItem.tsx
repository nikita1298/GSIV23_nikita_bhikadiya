import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import TextTruncate from "react-text-truncate";
import { useNavigate } from "react-router-dom";
import { TMovieList } from "../redux/Actions";

export interface MProps {
  movie: TMovieList;
}

export const MovieListItem = ({ movie }: MProps) => {
  const navigate = useNavigate();
  
  return (
    // <ErrorBoundary>

      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={() =>{
        navigate(`/detail/${movie?.id}`)}}>
        <CardMedia
          component="img"
          alt={movie?.title}
          height="140"
          image={
            movie?.poster_path
              ? process.env.REACT_APP_POSTER_PATH + movie?.poster_path
              : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png"
          }
        />
        <CardContent sx={{ p: 1, "&:last-child": { pb: 1 } }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Typography
                fontSize={10}
                align="left"
                gutterBottom
                component="div"
              >
                <TextTruncate
                  line={1}
                  element="span"
                  truncateText="…"
                  text={movie?.original_title}
                />
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography fontSize={10} gutterBottom component="div">
                {movie?.vote_average}
              </Typography>
            </Grid>
          </Grid>
          <Typography
            fontSize={8}
            gutterBottom
            variant="body2"
            color="text.secondary"
            align="left"
          >
            <TextTruncate
              line={2}
              element="span"
              truncateText="…"
              text={movie?.overview}
            />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    // </ErrorBoundary>

  );
};

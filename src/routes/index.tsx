import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import { publicRoutes } from "./RouteConstants";
import { MovieList } from "../pages/MovieList";
import { Navbar } from "../components/Navbar";

export default function Routes() {
  return (
    <>
      <Router>
        <Switch>
          {publicRoutes.map(({ path,search, element: Element }, index) => (
            <Route
              key={index}
              path={path}
              element={
                <>
                  <Navbar search={search}/>
                  <Element />
                </>
              }
            />
          ))}
          <Route
            path="/"
            element={
              <>
                <Navbar search={true} />
                <MovieList />{" "}
              </>
            }
          />
        </Switch>
      </Router>
    </>
  );
}

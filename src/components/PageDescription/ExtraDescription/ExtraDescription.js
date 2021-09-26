import React from "react";
import { NavLink, useRouteMatch, Switch, Route } from "react-router-dom";
import CastView from "../../Pages/CastView";
import ReviewsView from "../../Pages/ReviewsView";
import TrailerView from "../../Pages/TrailerView";

export const ExtraDescription = () => {
  const { url, path } = useRouteMatch();

  return (
    <>
      <ul>
        <li>
          <NavLink to={`${url}/cast`}>Cast</NavLink>
        </li>

        <li>
          <NavLink to={`${url}/reviews`}>Reviews</NavLink>
        </li>

        <li>
          <NavLink to={`${url}/trailer`}>Trailer</NavLink>
        </li>
      </ul>

      <Switch>
        <Route path={`${path}/cast`}>
          <CastView />
        </Route>

        <Route path={`${path}/reviews`}>
          <ReviewsView />
        </Route>

        <Route path={`${path}/trailer`}>
          <TrailerView />
        </Route>
      </Switch>
    </>
  );
};

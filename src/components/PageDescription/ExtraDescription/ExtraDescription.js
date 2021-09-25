import React from "react";
import { NavLink, useRouteMatch, Switch, Route } from "react-router-dom";
import CastView from "../../Pages/CastView";
import ReviewsView from "../../Pages/ReviewsView";

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
      </ul>

      <Switch>
        <Route path={`${path}/cast`}>
          <CastView />
        </Route>

        <Route path={`${path}/reviews`}>
          <ReviewsView />
        </Route>
      </Switch>
    </>
  );
};

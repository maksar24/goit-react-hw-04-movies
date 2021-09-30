import { lazy, Suspense } from "react";
import {
  NavLink,
  useRouteMatch,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import styles from "./ExtraDescription.module.css";
import { CustomLoader } from "../../Loader/Loader";

const CastView = lazy(() =>
  import("../../Pages/CastView" /* webpackChunkName: "cast" */)
);
const TrailerView = lazy(() =>
  import("../../Pages/TrailerView" /* webpackChunkName: "trailer" */)
);
const ReviewsView = lazy(() =>
  import("../../Pages/ReviewsView" /* webpackChunkName: "reviews" */)
);

export const ExtraDescription = () => {
  const { url, path } = useRouteMatch();
  const location = useLocation();

  return (
    <>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink
            className={styles.navItem}
            activeClassName={styles.activeNavItem}
            to={{
              pathname: `${url}/cast`,
              state: {
                from: location.state ? location.state.from : "/",
              },
            }}
          >
            Cast
          </NavLink>
        </li>

        <li className={styles.item}>
          <NavLink
            className={styles.navItem}
            activeClassName={styles.activeNavItem}
            to={{
              pathname: `${url}/reviews`,
              state: {
                from: location.state ? location.state.from : "/",
              },
            }}
          >
            Reviews
          </NavLink>
        </li>

        <li className={styles.item}>
          <NavLink
            className={styles.navItem}
            activeClassName={styles.activeNavItem}
            to={{
              pathname: `${url}/trailer`,
              state: {
                from: location.state ? location.state.from : "/",
              },
            }}
          >
            Trailer
          </NavLink>
        </li>
      </ul>

      <Suspense fallback={<CustomLoader />}>
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
      </Suspense>
    </>
  );
};

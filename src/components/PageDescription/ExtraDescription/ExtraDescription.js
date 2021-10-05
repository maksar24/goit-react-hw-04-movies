import React from "react";
import { NavLink, useRouteMatch, useLocation } from "react-router-dom";
import styles from "./ExtraDescription.module.css";

export const ExtraDescription = () => {
  const { url } = useRouteMatch();
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
    </>
  );
};

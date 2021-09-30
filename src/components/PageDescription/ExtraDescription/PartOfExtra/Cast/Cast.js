import React from "react";
import PropTypes from "prop-types";
import img from "../../../../../Image/Actor.jpg";
import styles from "./Cast.module.css";

export const Cast = ({ actors }) => {
  const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

  return (
    <>
      <ul className={styles.gallery}>
        {actors.map((el) => (
          <li className={styles.item} key={el.id}>
            <div className={styles.card}>
              <img
                className={styles.img}
                src={el.profile_path ? IMAGE_URL + el.profile_path : img}
                alt={el.name}
              />
            </div>
            <p className={styles.name}>{el.name}</p>
            <p className={styles.character}>{el.character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

Cast.propTypes = {
  actors: PropTypes.array.isRequired,
};

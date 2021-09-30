import React from "react";
import PropTypes from "prop-types";
import styles from "./Trailer.module.css";

export const Trailer = ({ trailer }) => {
  return (
    <ul className={styles.gallery}>
      {trailer.map(({ key }) => (
        <li className={styles.item} key={key}>
          <iframe
            className={styles.video}
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${key}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </li>
      ))}
    </ul>
  );
};

Trailer.propTypes = {
  trailer: PropTypes.array.isRequired,
};

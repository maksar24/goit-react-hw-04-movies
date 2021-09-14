import React from "react";
import PropTypes from "prop-types";
import styles from "./ListItem.module.css";

export const ListItem = ({ collection }) => {
  return collection.map((el) => (
    <li key={el.id} className={styles.MovieListItem}>
      <p>{el.title}</p>
      <img
        src={el.poster_path}
        alt={el.title}
        className={styles.MovieListItem_image}
      />
    </li>
  ));
};

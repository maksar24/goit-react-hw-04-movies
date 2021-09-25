import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./ListItem.module.css";
import img from "../../Image/BasicImage.jpg";

export const ListItem = ({ collection }) => {
  const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

  return collection.map((el) => (
    <li key={el.id} className={styles.MovieListItem}>
      <Link className={styles.Link} to={`/movies/${el.id}`}>
        <img
          src={el.backdrop_path ? IMAGE_URL + el.backdrop_path : img}
          alt={el.title}
          className={styles.MovieListItem_image}
        />
        <p className={styles.MovieListTitle}>{el.title}</p>
      </Link>
    </li>
  ));
};

ListItem.propTypes = {
  collection: PropTypes.array.isRequired,
};

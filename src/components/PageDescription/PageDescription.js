import React from "react";
import PropTypes from "prop-types";
import img from "../../Image/BasicImage.jpg";
import styles from "./PageDescription.module.css";

export const PageDescription = ({ movie }) => {
  const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
  const {
    title,
    poster_path,
    release_date,
    overview,
    genres,
    popularity,
    tagline,
  } = movie;

  return (
    <div className={styles.card}>
      <div className={styles.poster}>
        <img
          className={styles.img}
          src={poster_path ? IMAGE_URL + poster_path : img}
          alt={title}
        />
      </div>
      <div className={styles.details}>
        <h2 className={styles.title}>
          {title} ({release_date.slice(0, 4)})
        </h2>
        <h4 className={styles.tagline}>{tagline}</h4>
        <p>User Score: {Math.round(popularity)}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <ul className={styles.list}>
          {genres.map((genre) => (
            <li className={styles.item} key={genre.id}>
              {genre.name} |{" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

PageDescription.propTypes = {
  movie: PropTypes.object.isRequired,
};

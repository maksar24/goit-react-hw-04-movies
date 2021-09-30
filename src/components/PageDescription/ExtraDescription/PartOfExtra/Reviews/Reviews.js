import React from "react";
import PropTypes from "prop-types";
import styles from "./Reviews.module.css";

export const Reviews = ({ reviews }) => {
  if (reviews.length === 0) {
    return (
      <h2 className={styles.error}>
        We don`t have any reviews for this movie.
        <br />つ ◕_◕༽つ
      </h2>
    );
  }

  return (
    <>
      <ul className={styles.gallery}>
        {reviews.map((el) => (
          <li className={styles.item} key={el.id}>
            <p className={styles.author}>{el.author}</p>
            <p className={styles.content}>{el.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.array.isRequired,
};

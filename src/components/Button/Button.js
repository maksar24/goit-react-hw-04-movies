import React from "react";
import styles from "./Button.module.css";
import PropTypes from "prop-types";

export const Button = ({ action, title }) => {
  return (
    <button className={styles.Button} onClick={action} title={title}>
      {`${title}`}
    </button>
  );
};

Button.propTypes = {
  action: PropTypes.func,
};

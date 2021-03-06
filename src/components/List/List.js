import React from "react";
import { ListItem } from "../ListItem/ListItem";
import { Button } from "../Button/Button";
import PropTypes from "prop-types";
import styles from "./List.module.css";

export const List = ({ collection, actionButton, titleButton }) => {
  return (
    <div className={styles.Container}>
      <ul className={styles.List}>
        <ListItem collection={collection} />
      </ul>
      {collection.length > 11 && (
        <Button action={actionButton} title={titleButton} />
      )}
    </div>
  );
};

List.propTypes = {
  collection: PropTypes.array.isRequired,
  actionButton: PropTypes.func.isRequired,
  titleButton: PropTypes.string,
};

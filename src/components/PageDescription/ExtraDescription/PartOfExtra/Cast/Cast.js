import React from "react";
import img from "../../../../../Image/Actor.jpg";

export const Cast = ({ actors }) => {
  const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

  return (
    <>
      <ul>
        {actors.map((el) => (
          <li key={el.id}>
            <img
              src={el.profile_path ? IMAGE_URL + el.profile_path : img}
              alt={el.name}
            />
            <p>{el.name}</p>
            <p>{el.character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

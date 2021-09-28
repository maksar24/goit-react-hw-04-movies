import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import img from "../../Image/BasicImage.jpg";
import { Button } from "../Button/Button";

export const PageDescription = ({ movie }) => {
  const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
  const location = useLocation();
  const history = useHistory();
  const { title, poster_path, release_date, overview, genres, popularity } =
    movie;

  console.log(location.state);

  const onGoBack = () => {
    history.push(location?.state?.from ?? "/");
  };

  return (
    <>
      <Button onClick={onGoBack} title={"⟽ Go back"} />
      <div>
        <img src={poster_path ? IMAGE_URL + poster_path : img} alt={title} />
      </div>
      <div>
        <h2>
          {title} ({release_date.slice(0, 4)})
        </h2>
        <p>User Score: {Math.round(popularity)}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h4>Genres</h4>
        <ul>
          {genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

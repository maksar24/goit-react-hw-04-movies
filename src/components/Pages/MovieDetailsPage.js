import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../API";
import { PageDescription } from "../PageDescription/PageDescription";
import { CustomLoader } from "../Loader/Loader";
import { ExtraDescription } from "../PageDescription/ExtraDescription/ExtraDescription";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetchMovieDetails(movieId)
      .then((movie) => {
        setMovie(movie);
      })
      .catch((error) => {
        console.log(error);
        setError("Whoops, something went wrong. Enter your request again");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [movieId]);

  console.log("movie1", movie);

  return (
    <>
      {loading && <CustomLoader />}
      {error && <p>{error}</p>}
      {movie && (
        <>
          <PageDescription movie={movie} />
          <ExtraDescription />
        </>
      )}
    </>
  );
}

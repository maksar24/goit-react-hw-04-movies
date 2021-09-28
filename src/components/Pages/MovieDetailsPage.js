import React, { useState, useEffect } from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";
import { fetchMovieDetails } from "../API";
import { PageDescription } from "../PageDescription/PageDescription";
import { CustomLoader } from "../Loader/Loader";
import { ExtraDescription } from "../PageDescription/ExtraDescription/ExtraDescription";
import { Button } from "../Button/Button";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const location = useLocation();
  const history = useHistory();
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
        setError("Whoops, something went wrong. Enter your request again");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [movieId]);

  const onGoBack = () => {
    history.push(location?.state?.from ?? "/");
  };

  return (
    <>
      {loading && <CustomLoader />}
      {error && <p>{error}</p>}
      {movie && (
        <>
          <Button action={onGoBack} title={"⟽ Go back"} />
          <PageDescription movie={movie} />
          <ExtraDescription />
        </>
      )}
    </>
  );
}

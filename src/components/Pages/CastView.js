import { fetchMovieActors } from "../API";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { CustomLoader } from "../Loader/Loader";
import { Cast } from "../PageDescription/ExtraDescription/PartOfExtra/Cast/Cast";

export default function CastView() {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetchMovieActors(movieId)
      .then((actors) => {
        setActors(actors);
      })
      .catch((error) => {
        setError("Whoops, something went wrong. Enter your request again");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [movieId]);

  return (
    <>
      {loading && <CustomLoader />}
      {error && <p>{error}</p>}
      {actors && <Cast actors={actors} />}
    </>
  );
}

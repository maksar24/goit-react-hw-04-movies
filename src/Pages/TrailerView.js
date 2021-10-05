import { fetchMovieVideos } from "../service/API";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { CustomLoader } from "../components/Loader/Loader";
import { Trailer } from "../components/PageDescription/ExtraDescription/PartOfExtra/Trailer/Trailer";

export default function TrailerView() {
  const { movieId } = useParams();
  const [trailer, setTrailer] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetchMovieVideos(movieId)
      .then((trailer) => {
        setTrailer(trailer);
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
      {trailer && <Trailer trailer={trailer} />}
    </>
  );
}

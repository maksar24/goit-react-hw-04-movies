import { fetchMovieReviews } from "../service/API";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { CustomLoader } from "../components/Loader/Loader";
import { Reviews } from "../components/PageDescription/ExtraDescription/PartOfExtra/Reviews/Reviews";

export default function ReviewsView() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetchMovieReviews(movieId)
      .then((reviews) => {
        setReviews(reviews);
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
      {reviews && <Reviews reviews={reviews} />}
    </>
  );
}

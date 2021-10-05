import { useState, useEffect, lazy, Suspense } from "react";
import {
  useParams,
  useLocation,
  useHistory,
  useRouteMatch,
  Switch,
  Route,
} from "react-router-dom";
import { fetchMovieDetails } from "../service/API";
import { PageDescription } from "../components/PageDescription/PageDescription";
import { CustomLoader } from "../components/Loader/Loader";
import { ExtraDescription } from "../components/PageDescription/ExtraDescription/ExtraDescription";
import { Button } from "../components/Button/Button";

const CastView = lazy(() =>
  import("../Pages/CastView" /* webpackChunkName: "cast" */)
);
const TrailerView = lazy(() =>
  import("../Pages/TrailerView" /* webpackChunkName: "trailer" */)
);
const ReviewsView = lazy(() =>
  import("../Pages/ReviewsView" /* webpackChunkName: "reviews" */)
);

export default function MovieDetailsPage() {
  const { path } = useRouteMatch();
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

      <Suspense fallback={<CustomLoader />}>
        <Switch>
          <Route path={`${path}/cast`}>
            <CastView />
          </Route>

          <Route path={`${path}/reviews`}>
            <ReviewsView />
          </Route>

          <Route path={`${path}/trailer`}>
            <TrailerView />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}

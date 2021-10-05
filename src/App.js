import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Container from "./components/Container/Container";
import AppBar from "./components/AppBar/AppBar";
import { CustomLoader } from "./components/Loader/Loader";

const HomePage = lazy(() =>
  import("./Pages/HomePage" /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import("./Pages/MoviesPage" /* webpackChunkName: "movie-page" */)
);
const MovieDetailsPage = lazy(() =>
  import("./Pages/MovieDetailsPage" /* webpackChunkName: "movieDetails-page" */)
);
const NotFoundView = lazy(() =>
  import("./Pages/NotFoundView" /* webpackChunkName: "notFoundToView-page" */)
);

function App() {
  return (
    <Container>
      <AppBar />

      <Suspense fallback={<CustomLoader />}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;

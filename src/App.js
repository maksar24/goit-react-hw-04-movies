import { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Container from "./components/Container/Container";
import AppBar from "./components/AppBar/AppBar";
import { CustomLoader } from "./components/Loader/Loader";

const HomePage = lazy(() =>
  import("./components/Pages/HomePage" /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import("./components/Pages/MoviesPage" /* webpackChunkName: "movie-page" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./components/Pages/MovieDetailsPage" /* webpackChunkName: "movieDetails-page" */
  )
);
const NotFoundView = lazy(() =>
  import(
    "./components/Pages/NotFoundView" /* webpackChunkName: "notFoundToView-page" */
  )
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
            <Redirect to="/" />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;

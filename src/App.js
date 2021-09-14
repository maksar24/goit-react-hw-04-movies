import { Switch, Route } from "react-router-dom";
import Container from "./components/Container/Container";
import AppBar from "./components/AppBar/AppBar";
import HomePage from "./components/Pages/HomePage";
import MoviesPage from "./components/Pages/MoviesPage";
import NotFoundView from "./components/Pages/NotFoundView";

function App() {
  return (
    <Container>
      <AppBar />

      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/movies">
          <MoviesPage />
        </Route>

        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;

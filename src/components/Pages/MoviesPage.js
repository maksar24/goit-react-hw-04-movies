import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar";
import { CustomLoader } from "../Loader/Loader";
import { fetchSearchMovies } from "../API";
import { List } from "../List/List";

export default function MoviesPage() {
  const location = useLocation();
  const history = useHistory();
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const searchMovie = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    if (!searchMovie) {
      return;
    }

    const fetchMoviesList = async () => {
      try {
        setLoading(true);
        const moviesPageList = await fetchSearchMovies(
          searchMovie,
          currentPage
        );

        setMovies((prevMovies) => [...prevMovies, ...moviesPageList]);

        if (moviesPageList.length === 0) {
          setError(`Try to look for something 🔍`);
        }
      } catch (error) {
        setError("Whoops, something went wrong. Enter your request again");
      } finally {
        if (currentPage > 1) {
          scroll();
        }
        setLoading(false);
      }
    };
    fetchMoviesList();
  }, [searchMovie, currentPage]);

  const handleSubmit = (value) => {
    if (value !== "") {
      history.push({
        ...location,
        search: `query=${value}`,
      });
    }

    if (value !== query) {
      setMovies([]);
      setQuery(value);
      setCurrentPage(1);
      setError(null);
    }
  };

  const scroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const nextPage = () => setCurrentPage(currentPage + 1);

  return (
    <>
      <Searchbar onSubmit={handleSubmit} />
      {loading && <CustomLoader />}
      {error && <p>{error}</p>}
      {movies.length > 0 && !error && (
        <List
          collection={movies}
          actionButton={nextPage}
          titleButton={"Load more"}
        />
      )}
    </>
  );
}

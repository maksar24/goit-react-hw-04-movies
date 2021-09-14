import React, { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../API";
import { Link } from "react-router-dom";
import { List } from "../List/List";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchMoviesList = async () => {
      try {
        const moviesPageList = await fetchTrendingMovies(page);

        setMovies((prevMovies) => [...prevMovies, ...moviesPageList]);

        if (moviesPageList.length === 0) {
          setError(`There are no trend movies`);
        }
      } catch (error) {
        setError("Whoops, something went wrong. Enter your request again");
      }
    };
    fetchMoviesList();
  }, [page]);

  const nextPage = () => setCurrentPage(currentPage + 1);

  return (
    <>
      {movies.length > 0 && !error && (
        <List collection={movies} actionButton={nextPage} />
      )}
    </>
  );
}

import React, { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../service/API";
import { List } from "../components/List/List";
import { CustomLoader } from "../components/Loader/Loader";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMoviesList = async () => {
      try {
        setLoading(true);
        const moviesPageList = await fetchTrendingMovies(currentPage);

        setMovies((prevMovies) => [...prevMovies, ...moviesPageList]);

        if (moviesPageList.length === 0) {
          setError(`There are no trend movies`);
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
  }, [currentPage]);

  const scroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const nextPage = () => setCurrentPage(currentPage + 1);

  return (
    <>
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

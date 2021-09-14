import React, { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../API";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);

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

  return (
    <div>
      {movies.length > 0 && !error && (
        <ul>
          {movies.map(({ id }) => (
            <li>
              <Link
                to={{
                  pathname: `/movies/${id}`,
                }}
              ></Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

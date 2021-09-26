import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {
  api_key: "9d93a8874ece78649883bfc9efe0c649",
  language: "en-US",
};

export const fetchTrendingMovies = async (page) => {
  try {
    const { data } = await axios.get("/trending/movie/day", {
      params: { page },
    });
    return data.results;
  } catch (error) {
    return [];
  }
};

export const fetchSearchMovies = async (query, page) => {
  try {
    const { data } = await axios.get("/search/movie", {
      params: { query, page },
    });
    return data.results;
  } catch (error) {
    return [];
  }
};

export const fetchMovieDetails = async (movie_id) => {
  try {
    const { data } = await axios.get(`/movie/${movie_id}`);
    return data;
  } catch (error) {
    return [];
  }
};

export const fetchMovieActors = async (movie_id) => {
  try {
    const { data } = await axios.get(`/movie/${movie_id}/credits`);
    return data.cast;
  } catch (error) {
    return [];
  }
};

export const fetchMovieReviews = async (movie_id) => {
  try {
    const { data } = await axios.get(`/movie/${movie_id}/reviews`);
    return data.results;
  } catch (error) {
    return [];
  }
};

export const fetchMovieVideos = async (movie_id) => {
  try {
    const { data } = await axios.get(`/movie/${movie_id}/videos`);
    return data.results;
  } catch (error) {
    return [];
  }
};

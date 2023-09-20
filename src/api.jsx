import axios from 'axios';

const API_KEY = '0a59c656d51fca7e44fc925cdf601916';
// axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchPopularMovies = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
  );
  const data = response.data;
  return { results: data.results };
};

export const fetchMovieById = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );

  return response.data;
};

export const fetchCast = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return response.data;
};

export const fetchReviews = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return response.data;
};

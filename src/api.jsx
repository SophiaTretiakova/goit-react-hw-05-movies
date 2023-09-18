import axios from 'axios';

const API_KEY = '0a59c656d51fca7e44fc925cdf601916';
// axios.defaults.baseURL = 'https://api.themoviedb.org/3';

// export const fetchPopularMovies = async () => {
//   const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
//   return response.data;
// };
export const fetchPopularMovies = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
  );
  const data = response.data;
  return { results: data.results };
};

// export const fetchMovie = async ({ id }) => {
//   const response = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
//   return response.data;
// };

export const fetchMovieById = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  );

  return response.data;
};

// export const fetchCast = async ({ id }) => {
//   const response = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);
//   return response.data;
// };

// export const fetchReviews = async ({ id }) => {
//   const response = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`);
//   return response.data;
// };

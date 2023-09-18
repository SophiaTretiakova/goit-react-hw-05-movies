import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { fetchPopularMovies } from 'api';

export const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const images = await fetchPopularMovies();
        setPopularMovies(images.results);
      } catch (error) {
        console.log('error');
      }
    };
    getMovies();
  }, []);

  useEffect(() => {
    // const controller = new AbortController();
    async function fetchMovies() {
      try {
        const { results } = await fetchPopularMovies();
        setPopularMovies(prev => [...prev, ...results]);
      } catch (error) {
        console.log('error');
      }
    }
    fetchMovies();
  }, []);

  return (
    <>
      <h1>Trending today</h1>;
      <MoviesList popularMovies={popularMovies}></MoviesList>;
    </>
  );
};

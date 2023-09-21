import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { fetchPopularMovies } from 'api';

const Home = () => {
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
      <h1>Popular today</h1>
      <MoviesList
        popularMovies={popularMovies}
        style={{ display: 'flex' }}
      ></MoviesList>
    </>
  );
};

export default Home;

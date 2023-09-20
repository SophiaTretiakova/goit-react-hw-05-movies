import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery } from 'api';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const SearchMovies = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const searchQuery = searchParams.get('query');

        if (!searchQuery) {
          setMovies([]);
          setError(true);
        }

        if (query !== '') {
          const results = await fetchMoviesByQuery(query);
          setMovies(results);
          // setError(false);
        }
      } catch (error) {
        console.log('Error:', error);
        setError(true);
      }
    }
    fetchMovies();
  }, [query, searchParams]);

  const handleSubmit = evt => {
    evt.preventDefault();
    setQuery(evt.currentTarget.elements.query.value.trim().toLowerCase());
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" placeholder="Enter movie title" />
        <button type="submit">Search</button>
      </form>
      {/* {movies.length > 0 ? ( */}
      {error > 0 ? <MoviesList popularMovies={movies} /> : <p>No results</p>}
    </>
  );
};

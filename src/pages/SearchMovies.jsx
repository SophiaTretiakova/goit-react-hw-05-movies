import React, { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { fetchMoviesByQuery } from 'api';
import { MoviesList } from 'components/MoviesList/MoviesList';

const SearchMovies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const searchQuery = searchParams.get('query');
    async function fetchMovies() {
      try {
        if (!searchQuery) {
          setMovies([]);
          setError(true);
        }

        if (searchQuery) {
          const results = await fetchMoviesByQuery(searchQuery);
          setMovies(results);
          setError(false);
        }
      } catch (error) {
        console.log('Error:', error);
        setError(true);
      }
    }
    fetchMovies();
  }, [searchParams]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const newQuery = evt.currentTarget.elements.query.value
      .trim()
      .toLowerCase();
    setSearchParams({ query: newQuery });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" placeholder="Enter movie title" />
        <button type="submit">Search</button>
      </form>
      {error ? null : (
        <>
          {movies.length > 0 ? (
            <MoviesList popularMovies={movies} location={location} />
          ) : (
            <p>No results</p>
          )}
        </>
      )}
    </>
  );
};

export default SearchMovies;

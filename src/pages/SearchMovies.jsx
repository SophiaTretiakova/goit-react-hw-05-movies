import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const SearchMovies = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <form
        onSubmit={evt => {
          evt.preventDefault();
          setSearchParams({
            query: evt.currentTarget.elements.query.value.trim(),
          });
        }}
      >
        <input name="query" type="text" placeholder="Enter movie title" />
        <button type="submit">Search</button>
      </form>
      <MoviesList />
    </>
  );
};

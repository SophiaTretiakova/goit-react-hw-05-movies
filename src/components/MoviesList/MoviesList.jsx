// import { useState, useEffect } from 'react';
import { HomeMovie } from './HomeMovie';
// import { fetchPopularMovies } from 'api';

export const MoviesList = ({ popularMovies }) => {
  return (
    <ul>
      {popularMovies?.map(movie => (
        <HomeMovie
          key={movie.id}
          //   isPopular={isPopular}
          movie={movie}
          title={movie.title || 'not found'}
          //   id={movie.id}
        />
      ))}
    </ul>
  );
};

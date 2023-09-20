import { HomeMovie } from './HomeMovie';

export const MoviesList = ({ popularMovies }) => {
  return (
    <ul>
      {popularMovies?.map(movie => (
        <HomeMovie
          key={movie.id}
          movie={movie}
          title={movie.title || 'not found'}
        />
      ))}
    </ul>
  );
};

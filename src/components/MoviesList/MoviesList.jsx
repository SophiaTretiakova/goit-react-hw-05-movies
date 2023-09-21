import { HomeMovie } from './HomeMovie';
import { StyledMoviesList } from './MoviesList.styled';

export const MoviesList = ({ popularMovies }) => {
  return (
    <StyledMoviesList>
      {popularMovies?.map(movie => (
        <HomeMovie
          key={movie.id}
          movie={movie}
          title={movie.title || 'not found'}
        />
      ))}
    </StyledMoviesList>
  );
};

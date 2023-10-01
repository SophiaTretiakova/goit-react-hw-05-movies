import { Link, Outlet } from 'react-router-dom';
import { StyledMovieLi, Overlay, StyledMovieImg } from './HomeMovie.styled';

export const HomeMovie = ({ movie: { id, title, poster_path }, location }) => {
  return (
    <StyledMovieLi>
      <Link
        state={{ from: location }}
        to={`/movies/${id}`}
        style={{
          width: '200px',
          flexWrap: 'wrap',
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: ' hidden',
        }}
      >
        <StyledMovieImg
          loading="lazy"
          src={
            `https://image.tmdb.org/t/p/w300/${poster_path}` ||
            'https://cinemazero.it/media/photologue/photos/temp/cache/noposter.standard_display.png'
          }
          alt={title}
        />
        <Overlay>
          <p
            style={{
              position: 'absolute',
              color: 'white',
              zIndex: '2',
              top: '85%',
              left: '5%',
            }}
          >
            {' '}
            {title || 'Not found'}
          </p>
        </Overlay>
      </Link>
      <Outlet />
    </StyledMovieLi>
  );
};

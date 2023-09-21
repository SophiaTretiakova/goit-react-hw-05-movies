import { Link, Outlet } from 'react-router-dom';
export const HomeMovie = ({ movie: { id, title, poster_path } }) => {
  return (
    <li style={{ display: 'flex', flexDirection: 'column' }}>
      <img
        loading="lazy"
        src={
          `https://image.tmdb.org/t/p/w300/${poster_path}` ||
          'https://cinemazero.it/media/photologue/photos/temp/cache/noposter.standard_display.png'
        }
        alt={title}
      />
      <Link
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
        {title || 'Not found'}
      </Link>
      <Outlet />
    </li>
  );
};

import { Link, Outlet } from 'react-router-dom';
// Outlet
export const HomeMovie = ({ movie: { id, title, poster_path } }) => {
  return (
    <li style={{ display: 'flex', flexDirection: 'column' }}>
      <img
        loading="lazy"
        style={{ width: '100px' }}
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w300/${poster_path}`
            : 'https://motorhome.ee/wp-content/uploads/2020/01/blank-profile-picture-973460_1280-e1523978675847.png'
        }
        alt={title}
      />
      <Link to={`movies/${id}`}>{title || 'Not found'}</Link>
      <Outlet />
    </li>
  );
};

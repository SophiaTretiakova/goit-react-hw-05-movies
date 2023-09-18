import { Link, Outlet } from 'react-router-dom';
// Outlet
export const HomeMovie = ({ movie }) => {
  return (
    <li>
      <Link to={`movies/${movie.id}`}>{movie.title}</Link>
      <img
        loading="lazy"
        className="w-[200px] h-[300px]"
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
            : 'https://motorhome.ee/wp-content/uploads/2020/01/blank-profile-picture-973460_1280-e1523978675847.png'
        }
        alt={movie.title}
      />
      {/* <Link to={`${id}`}>{title}</Link> */}

      <Outlet />
    </li>
  );
};

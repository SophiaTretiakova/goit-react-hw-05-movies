import { fetchMovieById } from 'api';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: darkviolet;
  }
`;

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [errorStatus, setErrorStatus] = useState(200);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    async function fetchMovie() {
      try {
        const response = await fetchMovieById(movieId);
        setMovie(response);
      } catch (error) {
        setErrorStatus(error.response.status);
        return;
      }
    }

    fetchMovie();
  }, [movieId]);

  return (
    <>
      <Link to={backLinkHref}>Go Back</Link>
      {errorStatus === 404 ? (
        <p>Details not found</p>
      ) : (
        <>
          <div style={{ display: 'flex', gap: '40px' }}>
            <div>
              {!movie.poster_path ? (
                <div>No Image</div>
              ) : (
                <img
                  style={{ width: '300px' }}
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt=""
                />
              )}
            </div>

            <div style={{ flexDirection: 'column' }}>
              <p>
                <b>{movie.title}</b>
              </p>
              <p>{movie.release_date}</p>
              <p>
                <b>User Score:</b> {movie.vote_average}
              </p>
              <p>
                <b>Overview:</b> {movie.overview}
              </p>
              <ul className="flex gap-5">
                <b> Genres:</b>
                {movie.genres &&
                  movie.genres.map(genre => {
                    return <li key={genre.id}>{genre.name}</li>;
                  })}
              </ul>
            </div>
          </div>

          <div>
            <ul style={{ listStyle: 'none' }}>
              <li>
                <StyledLink to="cast">See cast</StyledLink>
              </li>
              <li>
                <StyledLink to="reviews">See reviews</StyledLink>
              </li>
            </ul>
            <div>
              <Outlet />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MovieDetails;

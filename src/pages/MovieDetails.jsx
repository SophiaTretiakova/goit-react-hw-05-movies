import { fetchMovieById } from 'api';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* <div> */}
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
              <p>{movie.title}</p>
              <p>{movie.release_date}</p>
              <p>User Score: {movie.vote_average}</p>
              <p>Overview: {movie.overview}</p>
              <ul className="flex gap-5">
                Genres:
                {movie.genres &&
                  movie.genres.map(genre => {
                    return <li key={genre.id}>{genre.name}</li>;
                  })}
              </ul>
            </div>
          </div>

          <div>
            <ul>
              <li>
                <Link to="cast">See cast</Link>
              </li>
              <li>
                <Link to="reviews">See reviews</Link>
              </li>
            </ul>
            <div>
              <Outlet />
            </div>
          </div>
          {/* </div> */}
        </>
      )}
      {/* </div> */}
    </>
  );
};

export default MovieDetails;

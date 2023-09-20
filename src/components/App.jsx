import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SearchMovies } from 'pages/SearchMovies';
import { Home } from 'pages/Home';
import { Reviews } from './Reviews/Reviews';
import { Layout } from 'Layout/Layout';
import { MovieDetails } from 'pages/MovieDetails';
import { Cast } from './Cast/Cast';

export const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} end> */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<SearchMovies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
      {/* <Outlet /> */}
    </Router>
  );
};

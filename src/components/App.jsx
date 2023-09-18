// import { Router, Route, Routes } from 'react-router-dom';
// import { MovieDetails } from 'pages/MovieDetails';
// import { Movies } from 'pages/Movies';
// import { Home } from 'pages/Home';
// import { Reviews } from './Reviews/Reviews';
// import { Cast } from './Cast/Cast';

// export const App = () => {
//   return (
//     <>
//       <Router>
//         <Routes>
//           <Route path="/" end element={<Home />}>
//             <Route index element={<Home />} />
//             <Route path="movies" element={<Movies />} />
//             <Route path="movies/:movieId" element={<MovieDetails />}>
//               <Route path="cast" element={<Cast />} />
//               <Route path="reviews" element={<Reviews />} />
//             </Route>
//           </Route>
//           <Route path="*" element={<Home />} />
//         </Routes>
//       </Router>
//     </>
//   );
// };
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Movies } from 'pages/Movies';
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
          <Route path="movies" element={<Movies />} />
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

import { Routes, Route, NavLink } from 'react-router-dom';
// import { getTrending } from "servicies/getMovies";
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import NotFound from 'pages/NotFound';
import MovieInfo from './MovieDetails';
import Cast from './AdditionalInfo/Cast';
import Reviews from './AdditionalInfo/Reviews';
import MovieDetails from './MovieDetails';
export const App = () => {
  // console.log(getTrending().then(movies => ({  movies })).then(movies=>console.log(movies)))
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

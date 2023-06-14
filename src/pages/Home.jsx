import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getTrending } from 'servicies/getMovies';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const getTrendMovies = async () => {
      try {
        const response = await getTrending();
        setMovies(response);
      } catch (error) {
        console.log(error);
      }
    };
    getTrendMovies();
  }, []);
  return (
    movies && (
      <div>
        <h1>Trending today</h1>
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  );
};
export default Home;

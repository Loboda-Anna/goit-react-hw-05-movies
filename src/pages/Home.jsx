import React from 'react';
import { useEffect, useState } from 'react';
import { getTrending } from 'servicies/getMovies';
import MoviesList from 'components/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);

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
        <MoviesList movies={movies}  />
      </div>
    )
  );
};
export default Home;

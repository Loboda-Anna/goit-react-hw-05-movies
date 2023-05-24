import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getTrending } from 'servicies/getMovies';

export default function Home() {
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
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
}

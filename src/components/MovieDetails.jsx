import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import AdditionalInfo from 'components/AdditionalInfo/AdditionalInfo';
import { getMovieById } from 'servicies/getMovies';

export default function MovieDetails() {
  const { movieId } = useParams();

  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async movieId => {
      try {
        const response = await getMovieById(movieId);
        setMovie(response);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie(movieId);
  }, [movieId]);

  console.log(movie);

  return (
    <main>
      <button>
        <Link to="/"></Link>Go back
      </button>
      <article>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
        <div>
          <h2>{`${movie.title} (${movie.release_date})`}</h2>
          <p>{`User Score: ${movie.vote_average}`}</p>
          <h3>Overview</h3>
          <p>{`${movie.overview}`}</p>
          <h3>Genres</h3>
          {/* <ul>
            {!movie.genres.length &&
              movie.genres.map(genre => <li>{genre.name}</li>)}
          </ul> */}
        </div>
        <AdditionalInfo />
      </article>

      <Outlet />
    </main>
  );
}

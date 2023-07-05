import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { getMovieById } from 'servicies/getMovies';
import Cast from '../../components/Cast/Cast';
import Reviews from '../../components/Reviews';
import defaultPoster from 'images/defaultPoster.jpg';
import { BackBtn, MovieCard, AdditionalInfo } from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
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

  return (
    <main>
      <BackBtn>
        <Link to={backLinkHref}>Go back</Link>
      </BackBtn>
      {movie && (
        <div>
          <MovieCard>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : defaultPoster
              }
              alt={movie.title}
            />

            <div>
              <h2>{`${movie.title} (${movie.release_date.slice(0, 4)})`}</h2>
              <p>{`User Score: ${movie.vote_average}`}</p>
              <h3>Overview</h3>
              <p>{`${movie.overview}`}</p>
              <h3>Genres</h3>
              <ul>
                {movie.genres.map(genre => (
                  <li key={genre.name}>{genre.name}</li>
                ))}
              </ul>
            </div>
          </MovieCard>
          <AdditionalInfo>
            <h2>Additional Information</h2>
            <div>
              <Link
                to={`/movies/${movieId}/cast`}
                element={<Cast />}
                state={location.state}
              >
                Cast
              </Link>
              <Link
                to={`/movies/${movieId}/reviews`}
                element={<Reviews />}
                state={location.state}
              >
                Reviews
              </Link>
            </div>
          </AdditionalInfo>
        </div>
      )}

      <Outlet />
    </main>
  );
};
export default MovieDetails;

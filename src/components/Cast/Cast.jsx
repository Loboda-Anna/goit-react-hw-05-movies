import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { getCast } from 'servicies/getMovies';
import defaultActor from 'images/defaultActor.png';
import { CastList } from './Cast.styled';
const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  // const location = useLocation();
  useEffect(() => {
    const getMovieCast = async movieId => {
      try {
        const response = await getCast(movieId);
        setCast(response.cast);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieCast(movieId);
  }, [movieId]);
  return (
    cast && (
      <div>
        <CastList>
          {cast.map(actor => (
            <li key={actor.id}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                    : defaultActor
                }
                alt={actor.name}
              ></img>
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </CastList>
      </div>
    )
  );
};
export default Cast;

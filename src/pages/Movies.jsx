import React, { useState, useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import { getMovieByName } from 'servicies/getMovies';
import Home from './Home';

import SearchBar from 'components/SearchBar';
import MovieInfo from 'components/MovieDetails';

export default function Movies({ movieid }) {
  //   const [movie, setMovie] = useState();
  // useEffect(() => {
  //   const getMovieByName = async name => {
  //     try {
  //       const response = await getMovieByName(name);
  //       setMovie(response);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getMovieByName();
  // }, [movieTitle]);
  //   const renderMovieByName = async name => {
  //     try {
  //       const response = await getMovieByName(name);
  //       console.log(response);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  return (
    <div>
      <SearchBar />
    </div>
  );
}

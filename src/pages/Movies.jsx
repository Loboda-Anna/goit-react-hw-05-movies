import React, { useState, useEffect, lazy } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByName } from 'servicies/getMovies';

const MoviesList = lazy(() => import('components/MoviesList'));
const SearchBar = lazy(() => import('components/SearchBar'));

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    const getMoviesList = async searchQuery => {
      try {
        const response = await getMoviesByName(query);
        if (response.length > 0) {
          setMovies(response);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getMoviesList(query);
  }, [query]);
  return (
    <div>
      <SearchBar onSubmit={updateQueryString} />
      {movies && <MoviesList movies={movies} />}
    </div>
  );
};
export default Movies;

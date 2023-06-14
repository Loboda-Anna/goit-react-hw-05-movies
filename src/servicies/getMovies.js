import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '63ec23fa1dc23aee040ba1524163629a';

export const getTrending = async () => {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  return response.data.results;
};
export const getMoviesByName = async query => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&page=1&query=${query}`
  );
  return response.data.results;
};
export const getMovieById = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
  );
  return response.data;
};
export const getCast = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
  );
  return response.data;
};
export const getReviews = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`
  );
  return response.data;
};

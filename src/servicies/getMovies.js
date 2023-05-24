import axios from 'axios';

// const BASE_URL = 'https://pixabay.com/api/?key=';
const API_KEY = '63ec23fa1dc23aee040ba1524163629a';

// axios.defaults.baseURL = BASE_URL;
// axios.defaults.params = {
//   key: API_KEY,
//   image_type: 'photo',
//   orientation: 'horizontal',
//   safesearch: 'true',
//   per_page: 12,
// };

// export const getImages = async (searchQuery, page) => {
//   const config = {
//     params: {
//       q: searchQuery,
//       page: page,
//     },
//   };
//   const response = await axios.get('', config);
//   return response.data.hits;
// };
export const getTrending = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  );
  return response.data.results;
};
export const getMovieByName = async query => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/${query}?api_key=${API_KEY}&page=1`
  );
  console.log(response.data.results);
  return response.data.results;
};
export const getMovieById = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  );
  console.log(response.data);
  return response.data;
};

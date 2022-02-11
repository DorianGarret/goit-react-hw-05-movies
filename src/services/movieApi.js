import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '88defd5220d984d75d9058a3a487de1d';

const fetchWithErrorHandling = async (url = '') => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (err) {
    return Promise.reject(err.response);
  }
};

export const dayTrending = () =>
  fetchWithErrorHandling(`/trending/movie/day?api_key=${API_KEY}`);

export const byIdWithFullDescription = movieId =>
  fetchWithErrorHandling(
    `movie/${movieId}?api_key=${API_KEY}&append_to_response=credits,reviews`
  );

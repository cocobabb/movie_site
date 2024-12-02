import api from "./axios";

const moviesApi = {
  getDetails: async (movieId) => {
    const response = await api.get(`/movie/${movieId}`);
    return response.data;
  },
  getReviews: async (movieId) => {
    const response = await api.get(`/movie/${movieId}/reviews`);
    return response.data;
  },
};
export default moviesApi;

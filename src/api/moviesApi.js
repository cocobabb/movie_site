import api from "./axios";

const moviesApi = {
  getDetails: async (movieId) => {
    const response = await api.get(`/${movieId}`);
    return response.data;
  },
  getReviews: async () => {
    const response = await api.get(`/${movieId}/reviews`);
    return response.data;
  },
};
export default moviesApi;

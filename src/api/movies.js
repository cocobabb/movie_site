import api from "./axios";

const moviesApi = {
  getDeatils: async () => {
    const response = await api.get(`/${movieId}`);
    return response.data;
  },
  getReviews: async () => {
    const response = await api.get(`/${movieId}/reviews`);
    return response.data;
  },
};

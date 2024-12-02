import api from "./axios";

const searchMoviesApi = {
  getSearchMovies: async (query) => {
    const response = await api.get(`/search/movie?query=${query}`);
    return response.data;
  },
};
export default searchMoviesApi;

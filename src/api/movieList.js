import api from "./axios";

const movieListApi = {
  getNowPlayingMovies: async () => {
    const response = await api.get("/now_playing");
    return response.data;
  },
  getPopularMovies: async () => {
    const response = await api.get("/popular");
    return response.data;
  },
  getTopRagedMovies: async () => {
    const response = await api.get("/top_rated");
    return response.data;
  },
};

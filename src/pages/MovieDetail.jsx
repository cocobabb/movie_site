import React, { useEffect, useState } from "react";
import moviesApi from "../api/moviesApi";
import { useParams } from "react-router-dom";

export default function MovieDetail() {
  const [movie, setMovie] = useState();
  const { movieId } = useParams();
  useEffect(() => {
    async function fetchGetMovie() {
      try {
        const data = await moviesApi.getDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchGetMovie();
  }, []);

  if (!movie) {
    return <div>영화 정보를 불러오는데 실패하였습니다.</div>;
  }

  return <h2>{movie.title}</h2>;
}

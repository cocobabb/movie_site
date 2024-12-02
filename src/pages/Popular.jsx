import React, { useEffect, useState } from "react";
import MovieSet from "../components/MovieSet";
import movieListApi from "../api/movieListApi";

export default function Popular() {
  const [popular, setPopular] = useState();

  useEffect(() => {
    async function fetchGetPopularMovies() {
      try {
        const data = await movieListApi.getPopularMovies();
        setPopular(data.results);
      } catch (error) {
        console.error(error);
      }
    }
    fetchGetPopularMovies();
  }, []);
  return (
    <>
      <h1>인기있는 영화</h1>
      <ul className="categoryPage">
        {popular?.map((p) => {
          const { id, title, poster_path } = p;
          return (
            <li key={id}>
              <MovieSet id={id} title={title} imgUrl={poster_path}></MovieSet>
            </li>
          );
        })}
      </ul>
    </>
  );
}

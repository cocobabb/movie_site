import React, { useEffect, useState } from "react";
import MovieSet from "../components/MovieSet";
import movieListApi from "../api/movieListApi";

export default function TopRated() {
  const [topRated, setTopRated] = useState();

  useEffect(() => {
    async function fetchGetTopRagedMovies() {
      try {
        const data = await movieListApi.getTopRatedMovies();
        setTopRated(data.results);
      } catch (error) {
        console.error(error);
      }
    }
    fetchGetTopRagedMovies();
  }, []);
  return (
    <>
      <h1>순위높은 영화</h1>
      <ul className="categoryPage">
        {topRated?.map((t) => {
          const { id, title, poster_path } = t;
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

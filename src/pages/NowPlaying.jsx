import React, { useEffect, useState } from "react";
import MovieSet from "../components/MovieSet";
import movieListApi from "../api/movieListApi";

export default function NowPlaying() {
  const [nowPlaying, setNowPlaying] = useState();

  useEffect(() => {
    async function fetchGetNowPlayingMovies() {
      try {
        const data = await movieListApi.getNowPlayingMovies();
        setNowPlaying(data.results);
      } catch (error) {
        console.error(error);
      }
    }
    fetchGetNowPlayingMovies();
  }, []);
  return (
    <>
      <h1>현재 상영 중인 영화</h1>
      <ul>
        {nowPlaying?.map((now) => {
          const { id, title, backdrop_path } = now;
          return (
            <li key={id}>
              <MovieSet id={id} title={title} imgUrl={backdrop_path}></MovieSet>
            </li>
          );
        })}
      </ul>
    </>
  );
}

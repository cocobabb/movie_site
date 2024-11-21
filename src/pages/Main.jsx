import React, { useEffect, useState } from "react";
import MovieSet from "../components/MovieSet";
import movieListApi from "../api/movieListApi";

export default function main() {
  const [nowPlaying, setNowPlaying] = useState();
  const [popular, setPopular] = useState();
  const [topRated, setTopRated] = useState();

  useEffect(() => {
    async function fetchGetNowPlayingMovies() {
      try {
        const data = await movieListApi.getNowPlayingMovies();
        setNowPlaying(data.results.slice(0, 5));
      } catch (error) {
        console.error(error);
      }
    }
    fetchGetNowPlayingMovies();
  }, []);

  useEffect(() => {
    async function fetchGetPopularMovies() {
      try {
        const data = await movieListApi.getNowPlayingMovies();
        setPopular(data.results.slice(0, 5));
      } catch (error) {
        console.error(error);
      }
    }
    fetchGetPopularMovies();
  }, []);

  useEffect(() => {
    async function fetchGetTopRagedMovies() {
      try {
        const data = await movieListApi.getNowPlayingMovies();
        setTopRated(data.results.slice(0, 5));
      } catch (error) {
        console.error(error);
      }
    }
    fetchGetTopRagedMovies();
  }, []);

  return (
    <>
      <h2>현재 상영 중</h2>
      <ul className="main">
        {nowPlaying?.map((now) => {
          const { id, title, backdrop_path } = now;
          return (
            <li key={id}>
              <MovieSet id={id} title={title} imgUrl={backdrop_path}></MovieSet>
            </li>
          );
        })}
      </ul>
      <a href="/now_playing">더보기</a>

      <br />
      <br />
      <h2>인기있는</h2>
      <ul className="main">
        {popular?.map((p) => {
          const { id, title, backdrop_path } = p;
          return (
            <li key={id}>
              <MovieSet id={id} title={title} imgUrl={backdrop_path}></MovieSet>
            </li>
          );
        })}
      </ul>
      <a href="/popular">더보기</a>

      <br />
      <br />
      <h2>순위</h2>
      <ul className="main">
        {topRated?.map((t) => {
          const { id, title, backdrop_path } = t;
          return (
            <li key={id}>
              <MovieSet id={id} title={title} imgUrl={backdrop_path}></MovieSet>
            </li>
          );
        })}
      </ul>
      <a href="/top_rated">더보기</a>
    </>
  );
}

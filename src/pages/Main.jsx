import React, { useEffect, useState } from "react";
import MovieSet from "../components/MovieSet";
import movieListApi from "../api/movieListApi";
import { useNavigate } from "react-router-dom";

export default function main() {
  const [nowPlaying, setNowPlaying] = useState();
  const [popular, setPopular] = useState();
  const [topRated, setTopRated] = useState();

  const navigate = useNavigate();

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
      <button onClick={() => navigate("/now_playing")}>더보기</button>

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
      <button onClick={() => navigate("/popular")}>더보기</button>

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
      <button onClick={() => navigate("/top_rated")}>더보기</button>
    </>
  );
}

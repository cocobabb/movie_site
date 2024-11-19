import React, { useEffect, useState } from "react";
import MovieSet from "../components/MovieSet";
import movieListApi from "../api/movieListApi";
import { useParams } from "react-router-dom";

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
      <div>현재 상영 중</div>
      <ul>
        {nowPlaying?.map((now) => {
          const { id, title } = now;
          return (
            <li key={id}>
              <MovieSet id={id} title={title}></MovieSet>
            </li>
          );
        })}
      </ul>
      <a href="/now_playing">더보기</a>

      <br />
      <br />
      <div>인기있는</div>
      <ul>
        {popular?.map((p) => {
          const { id, title } = p;
          return (
            <li key={id}>
              <MovieSet id={id} title={title}></MovieSet>
            </li>
          );
        })}
      </ul>
      <a href="/popular">더보기</a>

      <br />
      <br />
      <div>순위</div>
      <ul>
        {topRated?.map((t) => {
          const { id, title } = t;
          return (
            <li key={id}>
              <MovieSet id={id} title={title}></MovieSet>
            </li>
          );
        })}
      </ul>
      <a href="/top_rated">더보기</a>
    </>
  );
}

import React from "react";
import MovieSet from "../components/MovieSet";

export default function main() {
  return (
    <>
      <div>현재 상영 중</div>
      <MovieSet></MovieSet>
      <a href="/now_playing">더보기</a>

      <br />
      <br />
      <div>인기있는</div>
      <MovieSet></MovieSet>
      <a href="/popular">더보기</a>

      <br />
      <br />
      <div>순위</div>
      <MovieSet></MovieSet>
      <a href="/top_rated">더보기</a>
    </>
  );
}

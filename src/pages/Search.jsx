import { useSearchParams } from "react-router-dom";
import searchMoviesApi from "../api/searchMoviesApi";
import { useEffect, useState } from "react";
import MovieSet from "../components/MovieSet";

export default function Search() {
  let [searchParams, setSearchParams] = useSearchParams();
  const [searchMovies, setSearchMovies] = useState();

  useEffect(() => {
    async function fetchGetSearchMovies() {
      try {
        const data = await searchMoviesApi.getSearchMovies(
          searchParams.get("query")
        );
        setSearchMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    }
    fetchGetSearchMovies();
  }, [searchMovies]);

  return (
    <>
      <ul className="searchMovies">
        {searchMovies?.map((search) => {
          const { id, title, poster_path } = search;
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

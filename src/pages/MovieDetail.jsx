import React, { useEffect, useState } from "react";
import moviesApi from "../api/moviesApi";
import { useParams } from "react-router-dom";

export default function MovieDetail() {
  const [movie, setMovie] = useState();
  const { movieId } = useParams();
  const [reviews, setReviews] = useState();

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

  useEffect(() => {
    async function fetchGetReviews() {
      try {
        const data = await moviesApi.getReviews(movieId);
        setReviews(data.results);
      } catch (error) {
        console.error(error);
      }
    }
    fetchGetReviews();
  }, []);

  if (!movie) {
    return <div>영화 정보를 불러오는데 실패하였습니다.</div>;
  }
  if (!reviews) {
    return <div>후기 목록을 불러오는데 실패하였습니다</div>;
  }

  return (
    <>
      <div>
        <h2>{movie.title}</h2>
        <img
          src={`${import.meta.env.VITE_API_IMG}${movie.backdrop_path}`}
          alt=""
        />
        <ul>
          장르:
          {movie.genres.map((genre) => {
            return <li key={movie.id}>{genre.name}</li>;
          })}
        </ul>
        <div>
          개봉:
          <span> {movie.release_date}</span>
        </div>
      </div>
      <div>
        <ul>
          후기
          {reviews?.map((review) => {
            const { author_details, content } = review;

            return (
              <li>
                <span>{author_details.username}</span>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

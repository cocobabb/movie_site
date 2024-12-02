import React, { useEffect, useState } from "react";
import moviesApi from "../api/moviesApi";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../store/slices/jjimSlice";

export default function MovieDetail() {
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState();

  const { movieId } = useParams();
  const isLoginData = useSelector((state) => state.isLogin);
  const { isLogin } = isLoginData;
  const { datas } = useSelector((state) => state.jjim);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  let bookMarkCheck = false;
  datas.forEach((data) => {
    if (data.id === movieId) {
      return (bookMarkCheck = true);
    }
  });

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
        <h2>{movie?.title}</h2>
        {movie.poster_path ? (
          <img
            src={`${import.meta.env.VITE_API_IMG}${movie.poster_path}`}
            alt=""
          />
        ) : (
          <div
            style={{ width: 500, height: 750, backgroundColor: "lightgray" }}
          ></div>
        )}
        <p>{movie?.overview}</p>
        <ul>
          장르
          {movie?.genres.map((genre) => {
            return <li key={genre.id}>{genre.name}</li>;
          })}
        </ul>
        <div>
          개봉:
          <span> {movie?.release_date}</span>
        </div>
      </div>
      <div>
        {isLogin && bookMarkCheck ? (
          <button
            style={{
              border: "solid black 1px",
              width: 100,
              height: 100,
              textAlign: "center",
              backgroundColor: "pink",
              color: "white",
            }}
            onClick={() => dispatch(removeItem(movieId))}
          >
            찜
          </button>
        ) : (
          <>
            <button
              style={{
                border: "solid black 1px",
                width: 100,
                height: 100,
                textAlign: "center",
              }}
              onClick={() => {
                const newItem = {
                  id: movieId,
                  title: movie.title,
                  imgUrl: movie.poster_path,
                };
                if (isLogin) {
                  dispatch(addItem(newItem));
                } else if (!isLogin) {
                  alert("해당 기능은 로그인 시 이용 가능합니다.");
                  navigate("/login");
                }
              }}
            >
              찜
            </button>
          </>
        )}
        <ul>
          후기
          {reviews?.map((review) => {
            const { author_details, content } = review;

            return (
              <li key={author_details.username}>
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

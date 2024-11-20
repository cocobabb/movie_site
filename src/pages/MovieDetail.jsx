import React, { useEffect, useState } from "react";
import moviesApi from "../api/moviesApi";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../store/slices/jjimSlice";

export default function MovieDetail() {
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState();

  const { movieId } = useParams();
  const isLoginData = useSelector((state) => state.isLogin);
  const { isLogin } = isLoginData;
  const { datas } = useSelector((state) => state.jjim);

  const navigate = useNavigate();
  const dispatch = useDispatch();

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
        <img
          src={`${import.meta.env.VITE_API_IMG}${movie.backdrop_path}`}
          alt=""
        />
        <p>{movie?.overview}</p>
        <ul>
          장르
          {movie?.genres.map((genre) => {
            return <li key={movie.id}>{genre.name}</li>;
          })}
        </ul>
        <div>
          개봉:
          <span> {movie?.release_date}</span>
        </div>
      </div>
      <div>
        <button
          className={datas.map((data) =>
            data.id === movieId ? "changePink text-white" : ""
          )}
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
              imgUrl: movie.backdrop_path,
            };

            if (isLogin) {
              dispatch(addItem(newItem));
            } else {
              alert("로그인 후 사용 가능한 기능입니다.");
              navigate("/login");
            }
            // 특정한 조건에 따라 실행되야할 것이 다른 경우는 조건문 이용
            // 삼항연산자는 true, false 두가지 경우의 수에 따라
            // 실행되어야 할 경우 쓰는 게 좋다.
            // isLogin?
            // (dispatch(addItem(newItem)))
            // :
            // (alert('로그인 후 사용 가능한 기능입니다.'))
          }}
        >
          찜
        </button>
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

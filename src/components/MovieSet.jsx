import React from "react";
import { useNavigate } from "react-router-dom";

export default function MovieSet() {
  const navigate = useNavigate();

  return (
    <>
      <img
        src=""
        alt=""
        style={{ border: "solid black 1px", width: 100, height: 100 }}
        onClick={() => {
          navigate(`/:movieId`); //Todo: movieId 받아서 넣기
        }}
      />
      <div>제목</div>
    </>
  );
}

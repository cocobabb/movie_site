import React from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { login } from "../store/slices/loginSlice";
import LoginBtn from "./LoginBtn";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <div>아이디</div>
      <input type="text" />
      <div>비밀번호</div>
      <input type="text" />
      <LoginBtn
        onClick={() => {
          dispatch(login());
          navigate(-1);
        }}
      >
        로그인
      </LoginBtn>
    </>
  );
}

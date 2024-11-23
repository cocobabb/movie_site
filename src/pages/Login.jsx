import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../store/slices/loginSlice";
import LoginBtn from "./LoginBtn";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="loginContainer">
      <h1>아이디</h1>
      <input className="loginBlank" type="text" />
      <h1>비밀번호</h1>
      <input className="loginBlank" type="text" />
      <LoginBtn
        onClick={() => {
          dispatch(login());
          navigate(-1);
        }}
      >
        로그인
      </LoginBtn>
    </div>
  );
}

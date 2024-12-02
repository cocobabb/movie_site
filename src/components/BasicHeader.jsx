import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/slices/loginSlice";
import { useNavigate } from "react-router-dom";
import LoginBtn from "../pages/LoginBtn";
import { useState } from "react";

export default function BasicHeader() {
  const isLoginData = useSelector((state) => state.isLogin);
  const { isLogin } = isLoginData;
  const [inputVal, setInputVal] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <header className="basicHeaderContainer">
      {isLogin ? (
        <div className="isLoginHeader">
          <LoginBtn
            onClick={() => {
              dispatch(logout());
            }}
          >
            로그아웃
          </LoginBtn>

          <LoginBtn onClick={() => navigate("/myPage")}>마이페이지</LoginBtn>
        </div>
      ) : (
        <LoginBtn onClick={() => navigate("/login")}>로그인</LoginBtn>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setInputVal(e.target.value);
        }}
      >
        <input
          type="search"
          name=""
          id=""
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button
          onClick={() => {
            if (inputVal) {
              navigate(`/search?query=${inputVal}`);
            } else {
              alert("검색창에 검색어를 입력해주세요");
            }
          }}
        >
          검색
        </button>
      </form>
    </header>
  );
}

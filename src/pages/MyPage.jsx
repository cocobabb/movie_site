import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/slices/loginSlice";
import { useNavigate } from "react-router-dom";
import LoginBtn from "../pages/LoginBtn";

export default function MyPage() {
  const { isLogin } = useSelector((state) => state.isLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <header>
        {isLogin ? (
          <LoginBtn
            onClick={() => {
              dispatch(logout());
              navigate(-1);
            }}
          >
            로그아웃
          </LoginBtn>
        ) : (
          <LoginBtn onClick={() => navigate("/login")}>로그인</LoginBtn>
        )}
      </header>
      <h1>마이 페이지</h1>
      <hr />
    </>
  );
}

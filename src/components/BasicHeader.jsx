import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/slices/loginSlice";
import { useNavigate } from "react-router-dom";
import LoginBtn from "../pages/LoginBtn";

export default function BasicHeader() {
  const { isLogin } = useSelector((state) => state.isLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <header>
      {isLogin ? (
        <>
          <LoginBtn
            onClick={() => {
              dispatch(logout());
            }}
          >
            로그아웃
          </LoginBtn>
          <LoginBtn onClick={() => navigate("/myPage")}>마이페이지</LoginBtn>
        </>
      ) : (
        <LoginBtn onClick={() => navigate("/login")}>로그인</LoginBtn>
      )}
    </header>
  );
}

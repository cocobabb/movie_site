import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/slices/loginSlice";
import { useNavigate } from "react-router-dom";
import LoginBtn from "../pages/LoginBtn";

export default function BasicHeader() {
  const isLoginData = useSelector((state) => state.isLogin);
  const { isLogin } = isLoginData;
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
    </header>
  );
}

import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store/slices/loginSlice";
import { useNavigate } from "react-router-dom";

export default function BasicHeader() {
  const { isLogin } = useSelector((state) => state.isLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <header>
      {isLogin ? (
        <button onClick={() => dispatch(logout)}>로그아웃</button>
      ) : (
        <button
          onClick={() => {
            dispatch(login);
            navigate("/login");
          }}
        >
          로그인
        </button>
      )}
    </header>
  );
}

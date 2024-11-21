import { createSlice } from "@reduxjs/toolkit";
// 새로고침 시 store 데이터가 날아가는 현상이 생겨서
// localStorage를 활용하여 set

const initialState = {
  isLogin: localStorage.getItem("isLogin") ?? false,
};

const loginSlice = createSlice({
  name: "isLogin",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLogin = true;
      localStorage.setItem("isLogin", true);
    },
    logout: (state, action) => {
      state.isLogin = false;
      localStorage.removeItem("isLogin");
    },
  },
});
export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./slices/loginSlice";
import jjimReducer from "./slices/jjimSlice";

const store = configureStore({
  reducer: {
    isLogin: loginReducer,
    jjim: jjimReducer,
  },
});
export default store;

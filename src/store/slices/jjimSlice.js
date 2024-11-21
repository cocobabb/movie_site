import { createSlice } from "@reduxjs/toolkit";

const getDatas = () => {
  // 새로고침 시 store 데이터가 날아가는 현상이 생겨서
  // localStorage를 활용하여 set

  // **localStorage는** 브라우저의 Web Storage API를 기반으로 동작하며, **모든 값을 문자열 형태로 저장하도록 설계**
  // 이는 저장 데이터를 직렬화(Serialization)하고, 브라우저 간 호환성을 높이기 위한 설계임
  // localStorage에 객체나 배열을 직접 저장하면 [object object] 또는 이상한 값이 저장되므로
  // JSON.stringify()를 사용해야 함
  // JSON.stringify() >> JavaScript 객체나 배열을 JSON 문자열로 변환
  // JSON.parse() >>  JSON 문자열을 JavaScript 객체로 변환
  const localStorageDatas = localStorage.getItem("datas");
  return localStorageDatas ? JSON.parse(localStorageDatas) : [];
};

const initialState = {
  datas: getDatas(),
};

const jjimSlice = createSlice({
  name: "jjim",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.datas.unshift(action.payload);
      localStorage.setItem("datas", JSON.stringify(state.datas));
    },
    removeItem: (state, action) => {
      state.datas = state.datas.filter((data) => {
        data.id !== action.payload;
      });
      localStorage.setItem("datas", JSON.stringify(state.datas));
    },
  },
});
export const { addItem, removeItem } = jjimSlice.actions;
export default jjimSlice.reducer;

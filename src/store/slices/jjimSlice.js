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
      // 데이터 배열 변수가 있습니다(배열 안 요소들은 각각 객체 형태로 되어있으며
      //   각 객체에는 각 영화의 id, title, img path가 있습니다.)
      //   removeItem함수를 통해 id 값이 들어오면 기존 데이터의 id를 가져와서 비교합니다.
      //   만약 기존에 찜한 영화라면 데이터 안에 해당 id가 존재할 것이므로
      //   일치하지 않는 id를 가진 데이터만 다시 필터링 되어 datas에 다시 담깁니다.

      state.datas = state.datas.filter((data) => data.id !== action.payload);
      localStorage.setItem("datas", JSON.stringify(state.datas));
    },
  },
});
export const { addItem, removeItem } = jjimSlice.actions;
export default jjimSlice.reducer;

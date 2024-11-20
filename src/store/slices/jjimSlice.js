import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  datas: [],
  // datas 안에는 아래와 같은 형태의 데이터가 들어갈 것 이다
  // { id: "",
  //  title: "",
  // imgUrl: "",}
};

const jjimSlice = createSlice({
  name: "jjim",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.datas.unshift(action.payload);
    },
    removeItem: (state, action) => {
      state.datas = state.datas.filter((item) => item.id !== action.payload);
    },
  },
});
export const { addItem, removeItem } = jjimSlice.actions;
export default jjimSlice.reducer;

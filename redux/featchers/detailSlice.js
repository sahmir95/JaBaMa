import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  detailData: {},
};

export const detailSlice = createSlice({
  name: "detailSlice",
  initialState,
  reducers: {
    addDetailItem: (state, payload) => {
      if (state.detailData) {
        state.detailData = {};
      }
      state.detailData = payload.payload;
    },
  },
});

export const { addDetailItem } = detailSlice.actions;

export default detailSlice.reducer;

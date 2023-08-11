import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  isLoading: true,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    getData: (state, payload) => {
      state.data = payload.payload;
    },
  },
});

export const { getData } = dataSlice.actions;
export default dataSlice.reducer;

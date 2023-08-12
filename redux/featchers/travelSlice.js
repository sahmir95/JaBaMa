import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  travel: [],
};

export const travelSlice = createSlice({
  name: "travel",
  initialState,
  reducers: {
    addTravelData: (state, payload) => {
      const check = state.travel.find((item) => item.id === payload.payload.id);
      if (!check) {
        state.travel = [...state.travel, payload.payload];
      }
    },
    removeTravelData: (state, payload) => {
      const copy = state.travel.filter(
        (item) => item.id !== payload.payload.id
      );
      state.travel = [...copy];
    },
  },
});

export const { addTravelData, removeTravelData } = travelSlice.actions;

export default travelSlice.reducer;

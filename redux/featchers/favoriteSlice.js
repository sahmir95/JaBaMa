import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorite: [null],
};

export const favoriteSlise = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavoritePlace: (state, { payload }) => {
      if (state.favorite[0] == null) {
        state.favorite = [];
      }
      const check = state.favorite.find((item) => item.id == payload.id);
      if (!check) {
        state.favorite.push(payload);
      }
    },
    removeFavorite: (state, payload) => {
      const copy = state.favorite.filter(
        (item) => item.id !== payload.payload.id
      );
      state.favorite = [...copy];
    },
  },
});

export const { addFavoritePlace, removeFavorite } = favoriteSlise.actions;
export default favoriteSlise.reducer;

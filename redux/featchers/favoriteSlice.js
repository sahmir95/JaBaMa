import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorite: [],
};

export const favoriteSlise = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavoritePlace: (state, payload) => {
      const check = state.favorite.find(
        (item) => item.id === payload.payload.id
      );
      if (!check) {
        state.favorite = [...state.favorite, payload.payload];
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

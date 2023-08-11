import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./featchers/filterSlice";

const store = configureStore({
  reducer: {
    filterReducer,
  },
});

export default store;
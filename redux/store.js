import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./features/filterSlice";

const store = configureStore({
  reducer: {
    filterReducer,
  },
});

export default store;
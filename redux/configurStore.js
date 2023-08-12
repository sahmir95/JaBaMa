import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import filterSlice from "./featchers/filterSlice";
import dataSlice from "./featchers/dataSlice";
import favoriteSlice from "./featchers/favoriteSlice";
import detailSlice from "./featchers/detailSlice";
import travelSlice from "./featchers/travelSlice";

const rootReducer = combineReducers({
  dataSlice,
  favoriteSlice,
  detailSlice,
  travelSlice,
  filterSlice,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [logger, thunk];

const totalStore = () => {
  let store = configureStore({
    middleware: middlewares,
    reducer: persistedReducer,
  });
  let persistor = persistStore(store);
  return { store, persistor };
};

export default totalStore;

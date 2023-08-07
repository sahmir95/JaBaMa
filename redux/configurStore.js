import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";

import dataSlice from "./featchers/dataSlice";

const rootReducer = combineReducers({
  dataSlice,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [logger];

const totalStore = () => {
  let store = configureStore({
    middleware: middlewares,
    reducer: persistedReducer,
  });
  let persistor = persistStore(store);
  return { store, persistor };
};

export default totalStore;

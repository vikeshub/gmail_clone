// store.js
import { configureStore } from "@reduxjs/toolkit";
import appReducer from './appSlice';

const store = configureStore({
  reducer: {
    app: appReducer,  // Updated to match the reducer naming
  },
});

export default store;

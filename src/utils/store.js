import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import categoreSice from "./categoreSice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    categories: categoreSice,
  },
});
export default store;

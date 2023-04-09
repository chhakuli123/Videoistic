import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    cachedResults: {},
  },
  reducers: {
    cacheResults: (state, action) => {
      state.cachedResults = { ...state.cachedResults, ...action.payload };
    },
  },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [
      { name: "All", categoryId: 0 },
      { name: "Gaming", categoryId: 20 },
      { name: "Film & Animation", categoryId: 1 },
      { name: "Music", categoryId: 10 },
      { name: "Sports", categoryId: 17 },
      { name: "News", categoryId: 25 },
      { name: "Autos & Vehicles", categoryId: 2 },
      { name: "Lifestyle", categoryId: 22 },
      { name: "Science & Technology", categoryId: 28 },
    ],
    selectedCategoryID: 0,
  },
  reducers: {
    selectCategory: (state, action) => {
      state.selectedCategoryID = action.payload;
    },
  },
});

export const { selectCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;

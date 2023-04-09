// This code defines a Redux slice called "app" that manages the state of whether the app menu is open or closed. It sets the initial state to "isMenuOpen: true", and provides two reducer functions, "toggleMenu" and "closeMenu", that can be used to update this state.

// When "toggleMenu" is called, it toggles the value of "isMenuOpen" from true to false, or vice versa. When "closeMenu" is called, it sets "isMenuOpen" to false.

import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});
export const { toggleMenu, closeMenu } = appSlice.actions;
export default appSlice.reducer;

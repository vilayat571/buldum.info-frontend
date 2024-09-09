import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navCat: "",
};

const updateNav = createSlice({
  name: "updateNav",
  initialState,
  reducers: {
    changeNav: (state, action) => {
      state.navCat = action.payload;
    },
  },
});

export const { changeNav } = updateNav.actions;
export default updateNav.reducer;

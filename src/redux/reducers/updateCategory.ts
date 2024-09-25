import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  singleCategory: "",
};

const updateCategory = createSlice({
  name: "updateCategory",
  initialState,
  reducers: {
    updateNav: (state, action) => {
      state.singleCategory = action.payload;
    },
  },
});

export const { updateNav } = updateCategory.actions;
export default updateCategory.reducer;

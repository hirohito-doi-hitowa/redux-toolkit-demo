import { createSlice } from "@reduxjs/toolkit";

export const likesSlice = createSlice({
  name: "likes",
  initialState: {
    value: 12,
  },
  reducers: {
    updateCount: (state) => {
      state.value++;
    },
  },
});

export const { updateCount } = likesSlice.actions;

export default likesSlice.reducer;

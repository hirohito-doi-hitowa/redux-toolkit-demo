import { createSlice } from "@reduxjs/toolkit";

export const commentsSlice = createSlice({
  name: "comments",
  initialState: ["Wow", "awesome"],
  reducers: {
    postComment: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { postComment } = commentsSlice.actions;

export default commentsSlice.reducer;

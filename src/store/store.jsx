import { configureStore } from "@reduxjs/toolkit";
import likesReducer from "./likesSlice";
import commentsReducer from "./commentsSlice";
import imageReducer from "./imageSlice";

export default configureStore({
  reducer: {
    likes: likesReducer,
    comments: commentsReducer,
    image: imageReducer,
  },
});

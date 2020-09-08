import { configureStore } from "@reduxjs/toolkit";
import likesReducer from "./slices/likesSlice";
import commentsReducer from "./slices/commentsSlice";
import imageReducer from "./slices/imageSlice";

export default configureStore({
  reducer: {
    likes: likesReducer,
    comments: commentsReducer,
    image: imageReducer,
  },
});

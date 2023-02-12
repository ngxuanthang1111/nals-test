import { configureStore } from "@reduxjs/toolkit";
import blogReducers from "./slices/blogSlice";

export default configureStore({
  reducer: {
    blog: blogReducers,
  },
});

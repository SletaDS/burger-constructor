import { configureStore } from "@reduxjs/toolkit";
import Reducers from './Slice.jsx'
export default configureStore({
    reducer: {
      todos: Reducers,
    },
  });
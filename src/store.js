import { configureStore } from "@reduxjs/toolkit";
import summaryReducer from "./features/summarySlice";
import trendsReducer from "./features/trendslice";


export const store = configureStore({
  reducer: {
    summary: summaryReducer,
    trends: trendsReducer,

  },
});

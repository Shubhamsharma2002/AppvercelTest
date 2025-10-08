import { createSlice } from "@reduxjs/toolkit";

// Dummy data for trends (line chart)
const initialState = {
  labels: ["Jul 5", "Jul 6", "Jul 7", "Jul 8", "Jul 9", "Jul 10", "Jul 11"],
  data: [1200, 1600, 1400, 2000, 1800, 2200, 1900],
};

const trendsSlice = createSlice({
  name: "trends",
  initialState,
  reducers: {
    updateTrends: (state, action) => {
      state.data = action.payload.data;
      state.labels = action.payload.labels;
    },
  },
});

export const { updateTrends } = trendsSlice.actions;
export default trendsSlice.reducer;

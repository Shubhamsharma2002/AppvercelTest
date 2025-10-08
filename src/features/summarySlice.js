import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { title: "Conversions ROAS", value: "0.00%", change: "0%" },
  { title: "Conversions ROAS", value: "$6,109.89", change: "+24.63%" },
  { title: "Conversions ROAS", value: "$2,101", change: "0%" },
  { title: "Conversions ROAS", value: "$2.91", change: "0%" },
  { title: "Conversions ROAS", value: "0", change: "0%" },
  { title: "Conversions ROAS", value: "$0.00", change: "0%" },
];

const summarySlice = createSlice({
  name: "summary",
  initialState,
  reducers: {},
});

export default summarySlice.reducer;

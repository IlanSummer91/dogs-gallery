import { createSlice } from "@reduxjs/toolkit";

export const dogSlice = createSlice({
  name: "dog",
  initialState: {
    dogBreeds: [],
    dogsData: {},
    summaryData: {},
  },

  reducers: {
    setDogsData: (state, action) => {
      state.dogsData = action.payload;
    },
    setSummaryData: (state, action) => {
      state.summaryData = action.payload;
    },
    updateLikes: (state, action) => {
      state.dogsData[action.payload.id].likes += 1;
      state.summaryData[action.payload.breed].likes += 1;
    },
  },
});

export const { setDogsData, setSummaryData, updateLikes } = dogSlice.actions;

export default dogSlice.reducer;

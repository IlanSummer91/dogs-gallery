import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  dogs: [],
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const getDogs = createAsyncThunk("dogs/getDogs", async () => {
  const res = await axios.get("https://dog.ceo/api/breeds/list/all");

  return res.data.message;
});

export const dogSlice = createSlice({
  name: "dog",
  initialState,

  reducers: {
    setDogs: (state, action) => {
      state.dogs = action.payload;
    },
  },

  extraReducers: {
    [getDogs.fulfilled]: (state, action) => {
      state.dogs = action.payload;
    },
  },
});

export const { setDogs } = dogSlice.actions;

export default dogSlice.reducer;

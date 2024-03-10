import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      // Redux Toolkit uses ImmerJs for auto immutable update in the state.
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
    reset(state) {
      return initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;

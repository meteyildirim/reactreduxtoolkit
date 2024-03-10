import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  step: 1,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state, action) {
      // Redux Toolkit uses ImmerJs for auto immutable update in the state.
      state.count += action.payload.step;
    },
    decrement(state, action) {
      state.count -= action.payload.step;
    },
    reset(state) {
      return initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;

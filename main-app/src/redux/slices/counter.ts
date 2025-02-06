import { createSlice } from '@reduxjs/toolkit';

const initialState: { counter: number } = {
  counter: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.counter = state.counter + 1;
    },
  },
});

export const { increment } = counterSlice.actions;

export default counterSlice.reducer;

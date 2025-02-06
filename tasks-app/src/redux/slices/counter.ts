import { createSlice } from '@reduxjs/toolkit';

const initialState: { counter: number } = {
  counter: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment2: (state) => {
      state.counter = state.counter + 2;
    },
  },
});

export const { increment2 } = counterSlice.actions;

export default counterSlice.reducer;

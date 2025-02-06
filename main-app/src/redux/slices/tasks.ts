import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ITask, ITasks } from '../types';

const initialState: ITasks = {
  tasks: [{ title: 'test', status: 'ToDo' }],
};

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addNewTask: (state: ITasks, action: PayloadAction<ITask>) => {
      state.tasks = [...state.tasks, action.payload];
    },
  },
});

export const { addNewTask } = taskSlice.actions;

export default taskSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ITask, ITasks } from '../types';

const initialState: ITasks = {
  tasks: [{ id: '0111', title: 'test', status: 'ToDo' }],
};

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addNewTask: (state: ITasks, action: PayloadAction<ITask>) => {
      state.tasks = [...state.tasks, action.payload];
    },
    updateTask: (state, action: PayloadAction<ITask>) => {
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) return action.payload;
        return task;
      });
    },
    setSelectedTask: (state, action: PayloadAction<ITask | undefined>) => {
      state.selectedTask = action.payload;
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
  },
});

export const { addNewTask, updateTask, deleteTask, setSelectedTask } =
  taskSlice.actions;

export default taskSlice.reducer;

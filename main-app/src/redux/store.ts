import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './slices/tasks';

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './slices/tasks';
import counterReducer from './slices/counter';
import counter2 from 'tasks/counter2';

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    counter: counterReducer,
    counter2: counter2,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

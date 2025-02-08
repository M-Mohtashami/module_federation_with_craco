import { configureStore } from '@reduxjs/toolkit';
import counter from 'main/counter1';
import counterReducer from './slices/counter';
import taskReducer from './slices/tasks';

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    counter: counter,
    counter2: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

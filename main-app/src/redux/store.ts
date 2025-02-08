import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counter';
import tasksReducers from './reducers/tasks';

export const initStore = async () => {
  const store = configureStore({
    reducer: combineReducers({
      counter: counterReducer,
      ...tasksReducers,
    }),
  });
  return store;
};

export type RootState = ReturnType<typeof initStore> extends Promise<infer S>
  ? S extends { getState: () => infer T }
    ? T
    : never
  : never;

export type AppDispatch = ReturnType<typeof initStore> extends Promise<infer S>
  ? S extends { dispatch: infer D }
    ? D
    : never
  : never;

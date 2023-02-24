import { configureStore } from '@reduxjs/toolkit';
import JobReducer from './feature/job/JobSlice';

export const store = configureStore({
  reducer: {
    jobs: JobReducer,
  },
});

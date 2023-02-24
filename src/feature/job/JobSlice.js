import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  jobs: [],
  status: 'idle',
  error: null,
};

export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async (filter) => {
  const { limit, offset } = filter;
  const response = await axios.get(
    `http://localhost:5001/api/v1/jobs?limit=${limit}&offset=${offset}`,
  );
  return response.data.jobs;
});

const jobSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchJobs.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchJobs.fulfilled]: (state, action) => {
      state.status = 'succes';
      state.jobs = state.jobs.concat(action.payload);
    },
    [fetchJobs.rejected]: (state, action) => {
      (state.status = 'failed'), (state.error = action.error.message);
    },
  },
});

export default jobSlice.reducer;

export const selectAllJobs = (state) => state.jobs.jobs;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { StoreType } from './store';
import { fetchUsers } from './api/fetchUsers';

export type User = {
  id: number;
  name: string;
};

export type UsersReducerType = {
  users: User[];
};

const initialState: UsersReducerType = {
  users: [],
};

export const fetchUserThunk = createAsyncThunk('users/fetchUsers', fetchUsers);

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserThunk.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export const usersSliceSelector = (state: StoreType) => state.users.users;

export default usersSlice.reducer;
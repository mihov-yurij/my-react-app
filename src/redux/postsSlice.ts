import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { StoreType } from './store.ts';
import { fetchPosts } from './api/fetchPosts.ts';
import type { ResponseStatus } from './types/index.ts';

export type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export type PostsReducerType = {
  posts: Post[];
  status: ResponseStatus;
  error: string | null;
};

const initialState: PostsReducerType = {
  posts: [],
  status: 'idle',
  error: null,
};

export const fetchPostsThunk = createAsyncThunk('posts/fetchPosts', fetchPosts);

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPostsThunk.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(fetchPostsThunk.fulfilled, (state, action) => {  state.status = 'succeeded';
      state.posts = action.payload;
      
    });
    builder.addCase(fetchPostsThunk.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message || 'Failed to fetch posts';
    });
  },
});

export const postsSliceSelector = (state: StoreType) => state.posts.posts;
export const postsStatusSelector = (state: StoreType) => state.posts.status;
export const postsErrorSelector = (state: StoreType) => state.posts.error;
export default postsSlice.reducer;
import postsSlice from './postsSlice.ts';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice.ts';
import usersSlice from './usersSlice.ts';
import jsonPlaceHolderApi from './api/hooks/index';

import postsReducer from './postsSlice';
import usersReducer from './usersSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
});



const loggerMiddleware = (storeAPI: any) => (next: any) => (action: any) => {
  console.log('Dispatching:', action.type);
  const result = next(action);
  console.log('Next State:', storeAPI.getState());
  return result;
};

const globalStore = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsSlice,
    users: usersSlice,
    [jsonPlaceHolderApi.reducerPath]: jsonPlaceHolderApi.reducerPath,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(loggerMiddleware)
      .concat(jsonPlaceHolderApi.middleware),
});

export type StoreType = ReturnType<typeof globalStore.getState>;
export type AppDispatch = typeof globalStore.dispatch;

export default globalStore;
import postsSlice from './postsSlice';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import usersSlice from './usersSlice';
import jsonPlaceHolderApi from './api/hooks';

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
    [jsonPlaceHolderApi.reducerPath]: jsonPlaceHolderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(loggerMiddleware)
      .concat(jsonPlaceHolderApi.middleware),
});

export type StoreType = ReturnType<typeof globalStore.getState>;
export type AppDispatch = typeof globalStore.dispatch;

export default globalStore;
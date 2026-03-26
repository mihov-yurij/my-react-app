import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import postsReducer from './postsSlice';
import usersReducer from './usersSlice';
import jsonPlaceHolderApi from './api/hooks';

// middleware (оставляем, но без any можно потом улучшить)
const loggerMiddleware = (storeAPI: any) => (next: any) => (action: any) => {
  console.log('Dispatching:', action.type);
  const result = next(action);
  console.log('Next State:', storeAPI.getState());
  return result;
};

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    users: usersReducer,

    // RTK Query — ВАЖНО правильно подключить
    [jsonPlaceHolderApi.reducerPath]: jsonPlaceHolderApi.reducer,
  },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
      .concat(loggerMiddleware)
      .concat(jsonPlaceHolderApi.middleware),
});

// типы
export type StoreType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store
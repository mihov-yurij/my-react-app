import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const jsonPlaceHolderApi = createApi({
  reducerPath: 'jsonPlaceHolderApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  tagTypes: ['Todos'],
  endpoints: (build) => ({
    getTodos: build.query<Todo[], string>({
      query: () => `todos`,
    }),
  }),
});

export const { useGetTodosQuery } = jsonPlaceHolderApi;
export default jsonPlaceHolderApi;
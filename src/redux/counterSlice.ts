import { createSlice } from '@reduxjs/toolkit';
import type { StoreType } from './store';

export type CounterSliceType = {
  count: number;
};

const initialState: CounterSliceType = {
  count: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action: { payload: number }) => {
      state.count += action.payload;
    },
  },
});

export const counterSliceSelector = (state: StoreType) => state.counter.count;

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
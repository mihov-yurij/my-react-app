import { Actions } from './actions';

export type CounterType = {
  count: number;
};

export type CounterActionType = {
  type: keyof typeof Actions;
  payload?: number;
};

const initialState: CounterType = {
  count: 0,
};

function createCountReducer(state = initialState, action: CounterActionType) {
  switch (action.type) {
    case Actions.INCREMENT:
      return { ...state, count: state.count + 1 };
    case Actions.DECREMENT:
      return { ...state, count: state.count - 1 };
    case Actions.INCREMENT_BY_AMOUNT:
      return { ...state, count: state.count + (action.payload || 0) };
    default:
      return state;
  }
}

export default createCountReducer;
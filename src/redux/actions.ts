export const Actions = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  INCREMENT_BY_AMOUNT: 'INCREMENT_BY_AMOUNT',
};

export const incrementActionCreator = () => ({ type: Actions.INCREMENT });
export const decrementActionCreator = () => ({ type: Actions.DECREMENT });
export const incrementByAmountCreator = (value: number) => ({
  type: Actions.INCREMENT_BY_AMOUNT,
  payload: value,
});
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {
  counterSliceSelector,
  decrement,
  increment,
  incrementByAmount,
} from '../redux/counterSlice';

const Counter = () => {
  const [number, setNumber] = useState(0);
  const counter = useSelector(counterSliceSelector);
  const dispatch = useDispatch();

  const onButtonClick = () => {
    dispatch(incrementByAmount(number));
    setNumber(0);
  };

  return (
    <div>
      <p>{`Counter: ${counter}`}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <div>
        <input
          value={number}
          placeholder="Enter number"
          onChange={(event) => setNumber(Number(event.target.value))}
        />
        <button onClick={onButtonClick}>Increment By Number</button>
      </div>
    </div>
  );
};

export default Counter;
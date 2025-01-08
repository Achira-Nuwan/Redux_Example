import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../actions/CounterAction';
import { RootState } from '../types/RootState';

const Counter: React.FC = () => {
  // Access the count value from Redux store using useSelector
  const count = useSelector((state: RootState) => state.counter.count);

  // Dispatch actions using useDispatch
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;

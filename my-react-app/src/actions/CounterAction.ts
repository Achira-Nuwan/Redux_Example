import { DECREMENT, DecrementAction, INCREMENT, IncrementAction } from '../types/ActionType';

// Action Creators
export const increment = (): IncrementAction => ({
  type: INCREMENT,
});

export const decrement = (): DecrementAction => ({
  type: DECREMENT,
});

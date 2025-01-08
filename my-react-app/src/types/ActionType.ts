import { AnyAction } from 'redux'; // Import AnyAction from Redux

// Action Types (Constants)
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// Action Interfaces
export interface IncrementAction extends AnyAction {
  type: typeof INCREMENT;
}

export interface DecrementAction extends AnyAction {
  type: typeof DECREMENT;
}

// Union type for all actions
export type CounterActionTypes = IncrementAction | DecrementAction;

import {
  ADD_ACTION,
  SUBTRACT_ACTION,
} from './actionTypes';

export function addAction() {
  return {
    type: ADD_ACTION,
  };
}

export function subtractAction() {
  return {
    type: SUBTRACT_ACTION,
  };
}

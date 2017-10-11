// actions
export const ADD_TERM = "ADD_TERM";
export const CLEAR_CALCULATOR = "CLEAR_CALCULATOR";
export const SET_OPERATION = "SET_OPERATION";
export const PERFORM_OPERATION = "PERFORM_OPERATION";


// action creators
export function addTerm(number) {
  return {
    type: ADD_TERM,
    value: number
  };
}

export function clearCalculator() {
  return {
    type: CLEAR_CALCULATOR
  };
}

export function setOperation(operation) {
  return {
    type: SET_OPERATION,
    operation: operation
  };
}

export function performOperation() {
  return {
    type: PERFORM_OPERATION
  };
}
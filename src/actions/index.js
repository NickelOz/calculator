// actions
export const ADD_TERM = "ADD_TERM";
export const CLEAR_CALCULATOR = "CLEAR_CALCULATOR";
export const PERFORM_OPERATION = "PERFORM_OPERATION";


// action creators
export function addTerm(number) {
  return {
    type: ADD_TERM,
    value: number
  };
};

export function clearScreen() {
  return {
    type: CLEAR_CALCULATOR
  };
};

export function performOperation(result) {
  return {
    type: PERFORM_OPERATION,
    result: result
  };
};
// actions
export const ADD_TERM = "ADD_TERM";
export const CLEAR_CALCULATOR = "CLEAR_CALCULATOR";


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
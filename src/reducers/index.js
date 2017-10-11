import { ADD_TERM, CLEAR_CALCULATOR, SET_OPERATION, PERFORM_OPERATION } from "../actions/index";

const initialState = {
  displayValue: null,
  currentTerm: null,
  previousTerm: null,
  currentOperation: null
};

function calculatorApp( state=initialState, action ) {
  switch(action.type) {
    case ADD_TERM:
    console.log(`new term: ${action.value}`)
      return Object.assign({}, state,
        {
          displayValue: action.value,
          currentTerm: action.value,
          previousTerm: state.displayValue
        }
      );
    case CLEAR_CALCULATOR:
      return Object.assign({}, state, initialState);
    case SET_OPERATION:
      console.log(`set operation to ${action.operation}`)
      return Object.assign({}, state,
        {
          currentOperation: action.operation,
          currentTerm: state.displayValue,
          previousTerm: null
        }
      );
    case PERFORM_OPERATION:
      console.log(`perform ${state.currentOperation} with ${state.previousTerm} and ${state.currentTerm}`)
      if (state.previousTerm !== null && state.currentTerm !== null && state.currentOperation !== null) {
        var result;
        if (state.currentOperation === "ADDITION") {
          result = state.previousTerm + state.currentTerm;
        }
        else if (state.currentOperation === "SUBTRACTION") {
          result = state.previousTerm - state.currentTerm;
        }
        else if (state.currentOperation === "MULTIPLICATION") {
          result = state.previousTerm * state.currentTerm;
        }
        else if (state.currentOperation === "DIVISION") {
          result = state.previousTerm / state.currentTerm;
        }
        else {
          result = null;
        }
        console.log(`result ${result}`)
        return Object.assign({}, state,
          {
            displayValue: result,
            previousTerm: result
          }
        );
      }
      else {
        return state;
      }
    default:
      return state;
  };
}

export default calculatorApp;
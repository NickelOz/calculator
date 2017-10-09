import { ADD_TERM, CLEAR_CALCULATOR, PERFORM_OPERATION } from "../actions";

const initialState = {
  displayValue: 0,
  currentTerm: 0,
  previousTerm: 0
};

function calculatorApp( state=initialState, action ) {
  switch(action.type) {
    case ADD_TERM:
      return Object.assign({}, state,
        {
          displayValue: action.value,
          currentTerm: action.value,
          previousTerm: state.displayValue
        }
      );
    case CLEAR_CALCULATOR:
      return Object.assign({}, state, initialState);
    case PERFORM_OPERATION:
      return Object.assign({}, state,
        {
          displayValue: action.result,
          previousTerm: action.result
        }
      );
    default:
      return state;
  }
}

export default calculatorApp;
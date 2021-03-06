import React from "react";
import NumberButton from "../containers/NumberButton";
import OperatorButton from "../containers/OperatorButton";
import EqualsButton from "../containers/EqualsButton";
import ClearButton from "../containers/ClearButton";
import Screen from "../containers/Screen";
import Operations from "../operations";

class Calculator extends React.Component {
  render() {
    const numbers = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0]];
    return (
      <div id="calculator">
        <div className="row">
          <Screen/>
        </div>
        {numbers.map(row => {
          return (
            <div className="row">
              {row.map(number => {
                return (
                  <NumberButton value={number}/>
                );
              })}
            </div>
          );
        })}
        <div className="row">
          { Operations.map( op => {
            return (
              <OperatorButton value={ op.operand } operation={ op.operation }/>
            );
          })}
        </div>
        <div className="row">
            <EqualsButton/>
            <ClearButton/>
        </div>
      </div>
    );
  }
}

export default Calculator;
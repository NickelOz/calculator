import React from "react";
import Button from "../containers/Button";
import Screen from "../containers/Screen";

class Calculator extends React.Component {
  render() {
    const numbers = [[7, 8, 9], [4, 5, 6], [1, 2, 3]];
    return (
      <div id="calculator">
        <div className="row">
          <Screen />
        </div>
        {numbers.map(row => {
          return (
            <div className="row">
              {row.map(number => {
                return (
                  <Button value={number}/>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Calculator;
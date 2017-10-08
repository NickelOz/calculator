import React from 'react';
import Button from './Button.js';
import Screen from './Screen.js';

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      displayValue: null,
      currentTerm: null,
      currentOperator: null,
      previousTerm: null
    };
    this.handleNumberChange = this.handleNumberChange.bind(this);
  }

  handleNumberChange(newNumber) {
    this.setState({ currentTerm: newNumber });
  }

  renderScreen(value) {
    return <Screen value={value} />;
  }

  render() {
    const currentTerm = this.state.currentTerm;
    const numbers = [[7, 8, 9], [4, 5, 6], [1, 2, 3]];
    return (
      <div id="calculator">
        <div className="row">{ this.renderScreen(currentTerm) }</div>
        {numbers.map(row => {
          return (
            <div className="row">
              {row.map(number => {
                return (
                  <Button
                    value={number}
                    onClick={() => { this.handleNumberChange(number); }}
                  />
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
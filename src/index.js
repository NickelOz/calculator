import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Button extends React.Component {
  render() {
    return (
      <div className="button" onClick={() => this.props.onClick()}>
        {this.props.value}
      </div>
    );
  }
}

class Screen extends React.Component {
  render() {
    const value = this.props.value;
    return (
      <div id="screen">
        <div>{value}</div>
      </div>
    );
  }
}

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTerm: 0,
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
        <div className="row">{this.renderScreen(currentTerm)}</div>
        {numbers.map(row => {
          return (
            <div className="row">
              {row.map(number => {
                return (
                  <Button
                    value={number}
                    onClick={() => {
                      this.handleNumberChange(number);
                    }}
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

ReactDOM.render(<Calculator />, document.getElementById("root"));

import React from "react";
import { connect } from "react-redux";
import Button from "../components/Button";
import { clearCalculator } from "../actions/index";

class ClearButtonContainer extends React.Component {
  render() {
    return (
      <Button
        value="C"
        onClick= { () => { this.props.onButtonClick() }}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onButtonClick: () => {
      dispatch(clearCalculator());
    }
  };
};

const c = connect(null, mapDispatchToProps)(ClearButtonContainer);

export default c;
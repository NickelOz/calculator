import React from "react";
import { connect } from "react-redux";
import Button from "../components/Button";
import { setOperation } from "../actions/index";

class OperatorButtonContainer extends React.Component {
  render() {
    return (
      <Button 
        value={ this.props.value }
        onClick={ () => {
          this.props.onButtonClick( this.props.operation )
        }}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onButtonClick: operation => {
      dispatch(setOperation(operation));
    }
  };
};

const c = connect(null, mapDispatchToProps)(OperatorButtonContainer);

export default c;
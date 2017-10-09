import React from "react";
import { connect } from "react-redux";
import Button from "../components/Button";
import { performOperation } from "../actions/index";

class OperatorButtonContainer extends React.Component {
  render() {
    return (
      <Button 
        value={ this.props.value }
        onClick={ () => { this.props.onButtonClick( this.props.operation( this.props.leadingOperand, this.props.closingOperand ) ) } }
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    leadingOperand: state.previousTerm,
    closingOperand: state.currentTerm
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onButtonClick: result => {
      dispatch(performOperation(result))
    }
  };
};

const c = connect(mapStateToProps, mapDispatchToProps)(OperatorButtonContainer);

export default c;
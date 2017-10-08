import React from "react";
import { connect } from "react-redux";
import Button from "../components/Button";
import { addTerm } from "../actions/index";

class ButtonContainer extends React.Component {
  render() {
    return (
      <Button
        value={ this.props.value }
        onClick={() => { this.props.onButtonClick( this.props.value ); }}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onButtonClick: value => {
      dispatch(addTerm(value));
    }
  };
}

const c = connect(null, mapDispatchToProps)(ButtonContainer);

export default c;
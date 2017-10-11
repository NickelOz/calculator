import React from "react";
import { connect } from "react-redux";
import Button from "../components/Button";
import { performOperation } from "../actions/index";

class EqualsButtonContainer extends React.Component {
  render() {
    return (
      <Button
        value="="
        onClick={ () => { 
          this.props.onButtonClick();
          }
        }
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onButtonClick: () => {
      dispatch(performOperation());
    }
  };
};

const c = connect(null, mapDispatchToProps)(EqualsButtonContainer);

export default c;
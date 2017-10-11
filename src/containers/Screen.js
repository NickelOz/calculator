import React from "react";
import { connect } from "react-redux";
import Screen from "../components/Screen";

class ScreenContainer extends React.Component {
  render() {
    return (
      <Screen value={(this.props.value !== null) ? this.props.value : "-"} />
    );
  }
}

const mapStateToProps = state => {
  return {
    value: state.displayValue
  };
};

const c = connect(mapStateToProps)(ScreenContainer);

export default c;
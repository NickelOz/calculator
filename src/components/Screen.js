import React from "react";

class Screen extends React.Component {
  render() {
    return (
      <div id="screen">
        <div>{this.props.value}</div>
      </div>
    );
  }
}

export default Screen;
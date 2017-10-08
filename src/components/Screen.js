import React from 'react';

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

export default Screen;
import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <div className="button" onClick={ () => this.props.onClick() }>
        {this.props.value}
      </div>
    );
  }
}

export default Button;
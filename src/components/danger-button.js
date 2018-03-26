import React, { Component } from 'react';

class DangerButton extends Component {
  render() {
    return <button>{this.props.children}</button>;
  }
}
export { DangerButton };

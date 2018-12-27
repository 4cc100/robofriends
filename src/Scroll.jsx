import React, { Component } from 'react';
import './Scroll.css';

class Scroll extends Component {
  render() {
    return (
      <div className="scroll-container">
        {this.props.children}
      </div>
    )
  }
}


export default Scroll;
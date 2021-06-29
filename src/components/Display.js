import React, { Component } from "react";
//rce

export class Display extends Component {
  render() {
    return (
      <div>
        <img
          style={{ height: 700, width: 700 }}
          src={this.props.bigImage}
          alt="jpeg images"
        />
        <div >
          <button onClick={this.props.randomImageGenerator}>
            RANDOM IMAGE
          </button>
        </div>
      </div>
    );
  }
}

export default Display;

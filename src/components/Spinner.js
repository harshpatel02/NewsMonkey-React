import React, { Component } from "react";

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center mt-5">
        <img src="/loading-1.2s.gif" width={50} alt="loading" />
      </div>
    );
  }
}

export default Spinner;

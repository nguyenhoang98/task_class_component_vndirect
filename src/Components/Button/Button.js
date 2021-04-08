import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { handleOpenForm } = this.props;
    return (
      <button className="btn btn-showForm" onClick={handleOpenForm}>
        Mở Form
      </button>
    );
  }
}
export default Button;

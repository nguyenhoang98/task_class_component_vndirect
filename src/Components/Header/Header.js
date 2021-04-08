import React, { Component } from "react";

import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="header">
        <h2>Ứng Dụng Quản Lí Công Việc</h2>
      </div>
    );
  }
}
export default Header;

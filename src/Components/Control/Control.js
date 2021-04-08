import React, { Component } from "react";

import "./Control.css";

class Control extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      filter,
      handleOnchangeFilter,
      sortTask,
      handleOnchangeSort,
    } = this.props;
    return (
      <div className="control">
        <select value={filter} name="filter" onChange={handleOnchangeFilter}>
          <option value={0}>Tất Cả</option>
          <option value={1}>Hoàn thành</option>
          <option value={-1}>Chưa Hoàn Thành</option>
        </select>
        <select value={sortTask} onChange={handleOnchangeSort}>
          <option value={0}>Mặc Định</option>
          <option value={1}>Sắp Xếp Theo Chữ Cái</option>
        </select>
      </div>
    );
  }
}
export default Control;

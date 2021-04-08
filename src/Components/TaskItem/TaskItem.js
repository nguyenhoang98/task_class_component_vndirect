import React, { Component } from "react";
import "./TaskItem.css";

class TaskItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data, index, handleOnDelTask, handleOnEditForm } = this.props;
    return (
      <tr>
        <td> {index + 1} </td>
        <td> {data.name} </td>
        <td> {data.description} </td>
        <td>
          <span className={data.status ? "blue" : "red"}>
            {data.status ? "Hoàn Thành " : "Chưa Hoàn Thành"}
          </span>
        </td>
        <td>
          <button
            className="btn btn-edit"
            onClick={() => handleOnEditForm(data)}
          >
            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
            &nbsp; Cập Nhật
          </button>
          <button
            className="btn btn-delTask"
            onClick={() => handleOnDelTask(data)}
          >
            <i className="fa fa-trash-o" aria-hidden="true"></i>
            &nbsp; Xóa Công Việc
          </button>
        </td>
      </tr>
    );
  }
}
export default TaskItem;

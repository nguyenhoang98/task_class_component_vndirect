import React, { Component } from "react";
import "./TaskList.css";
import TaskItem from "../TaskItem/TaskItem";
class TaskList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { tasks, handleOnDelTask, handleOnEditForm } = this.props;
    return (
      <div className="tasklist">
        <table className="tasklist__table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên </th>
              <th> Mô tả </th>
              <th>Trạng Thái</th>
              <th>Hành Động</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((value, index) => {
              return (
                <TaskItem
                  data={value}
                  index={index}
                  key={index}
                  handleOnDelTask={handleOnDelTask}
                  handleOnEditForm={handleOnEditForm}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default TaskList;

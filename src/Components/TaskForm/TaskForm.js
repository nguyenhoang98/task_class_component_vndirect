import React, { Component } from "react";

import "./TaskForm.css";

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      description: "",
      status: true,
    };
    this.handleOnchange = this.handleOnchange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnreset = this.handleOnreset.bind(this);
  }
  handleOnchange(e) {
    const target = e.target;
    const name = target.name;
    const value =
      target.value === "true"
        ? true
        : target.value === "false"
        ? false
        : target.value;
    this.setState({
      [name]: value,
    });
  }
  handleOnSubmit(e) {
    e.preventDefault();
    const { addTask } = this.props;
    addTask(this.state);
    this.handleOnreset();
  }
  handleOnreset() {
    this.setState({
      id: "",
      name: " ",
      description: "",
      status: true,
    });
  }
  componentDidMount() {
    const { edit } = this.props;
    this.setState({
      id: edit.id,
      name: edit.name,
      description: edit.description,
      status: edit.status,
    });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.edit) {
      this.setState({
        id: nextProps.edit.id,
        name: nextProps.edit.name,
        description: nextProps.edit.description,
        status: nextProps.edit.status,
      });
    }
  }
  render() {
    const { id, name, description, status } = this.state;
    const { handleCloseForm, edit } = this.props;

    return (
      <div className="taskform">
        <div className="taskform__title">
          {id ? "Cập Nhật Công Việc" : "Thêm công việc"}
        </div>
        <span className="close-form" onClick={handleCloseForm}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </span>
        <form onSubmit={this.handleOnSubmit}>
          <div className="group-form">
            <label className="group-form__title">Tên Công Việc</label>
            <input
              type="text"
              className="group-form__input"
              value={name}
              name="name"
              onChange={this.handleOnchange}
            />
          </div>
          <div className="group-form">
            <label className="group-form__title">Mô Tả</label>
            <input
              type="text"
              className="group-form__input"
              value={description}
              name="description"
              onChange={this.handleOnchange}
            />
          </div>
          <div className="group-form">
            <label className="group-form__title">Trạng Thái</label>
            <select
              className="group-form__select"
              value={status}
              name="status"
              onChange={this.handleOnchange}
            >
              <option value={true}>Hoàn Thành</option>
              <option value={false}>Chưa Hoàn Thành</option>
            </select>
          </div>
          <div className="group-form">
            <button type="submit" className="btn btn-submit">
              {edit.id ? " Cập nhật " : "Thêm Công Việc"}
            </button>
            <button
              type="reset"
              className="btn btn-reset"
              onClick={this.handleOnreset}
            >
              Làm mới
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default TaskForm;

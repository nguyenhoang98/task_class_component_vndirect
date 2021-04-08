import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import TaskList from "./Components/TaskList/TaskList";
import Button from "./Components/Button/Button";
import TaskForm from "./Components/TaskForm/TaskForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      isOpenForm: false,
      edit: {
        id: "",
        name: "",
        description: "",
        status: true,
      },
    };
    this.addTask = this.addTask.bind(this);
    this.openForm = this.openForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.onDelTask = this.onDelTask.bind(this);
    this.editForm = this.editForm.bind(this);
  }
  componentDidUpdate() {
    localStorage.setItem("class_tasks", JSON.stringify(this.state.tasks));
  }
  componentDidMount() {
    if (localStorage.getItem("class_tasks")) {
      this.setState({
        tasks: JSON.parse(localStorage.getItem("class_tasks")),
      });
    }
  }
  s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  createID() {
    return (
      this.s4() +
      this.s4() +
      this.s4() +
      "-" +
      this.s4() +
      "-" +
      this.s4() +
      "-" +
      this.s4()
    );
  }
  addTask(data) {
    if (data.id) {
      const index = this.state.tasks.findIndex((value) => {
        return value.id === data.id;
      });
      this.state.tasks[index] = data;
      this.setState({
        tasks: this.state.tasks,
      });
      toast("Cập Nhật Công Việc Thành Công !!!");
    } else {
      data.id = this.createID();
      this.state.tasks.push(data);
      this.setState({
        tasks: this.state.tasks,
      });
      toast("Thêm Công Việc Thành Công !!!");
    }
    this.closeForm();
  }
  openForm() {
    this.setState({
      isOpenForm: true,
    });
  }
  closeForm() {
    this.setState({
      isOpenForm: false,
    });
    this.setState({
      edit: {
        id: "",
        name: "",
        description: "",
        status: true,
      },
    });
  }
  onDelTask(data) {
    const index = this.state.tasks.findIndex((value) => {
      return value.id === data.id;
    });
    this.state.tasks.splice(index, 1);
    this.setState({
      tasks: this.state.tasks,
    });
    toast("Xóa Công Việc Thành Công !!!");
  }
  editForm(data) {
    this.openForm();
    this.setState({
      edit: {
        id: data.id,
        name: data.name,
        description: data.description,
        status: data.status,
      },
    });
  }
  render() {
    const { tasks, edit } = this.state;
    return (
      <div className="app">
        <Header />
        <TaskList
          tasks={tasks}
          handleOnDelTask={this.onDelTask}
          handleOnEditForm={this.editForm}
        />
        {this.state.isOpenForm && (
          <TaskForm
            addTask={this.addTask}
            handleCloseForm={this.closeForm}
            edit={edit}
          />
        )}
        <Button handleOpenForm={this.openForm} />
        <ToastContainer />
      </div>
    );
  }
}
export default App;

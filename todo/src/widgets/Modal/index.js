import React from "react";
import "./Modal.css";
import AddTask from "../AddTask";
import UpdateTask from "../UpdateTask";

const Modal = ({ className, setDropdown, setTasks, isUpdate }) => {
  return !isUpdate ? (
    <div className={`${className} modal`}>
      <AddTask
        setDropdown={setDropdown}
        setTasks={(task) => setTasks(task)}
      ></AddTask>
    </div>
  ) : (
    <div className={`${className} modal`}>
      <UpdateTask
        setDropdown={setDropdown}
        setTasks={(task) => setTasks(task)}
      ></UpdateTask>
    </div>
  );
};

export default Modal;

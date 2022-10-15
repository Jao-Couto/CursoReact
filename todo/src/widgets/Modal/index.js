import React from "react";
import "./Modal.css";
import AddTask from "../AddTask";
import UpdateTask from "../UpdateTask";

const Modal = ({ show, setShow, setTasks, isUpdate }) => {
  return !isUpdate ? (
    <div style={{display: (show) ? "block" : "none"}} className={"modal"}>
      <AddTask
        setShow={setShow}
        setTasks={(task) => setTasks(task)}
      ></AddTask>
    </div>
  ) : (
    <div className={"modal"}>
      <UpdateTask
        setShow={setShow}
        setTasks={(task) => setTasks(task)}
      />
    </div>
  );
};

export default Modal;

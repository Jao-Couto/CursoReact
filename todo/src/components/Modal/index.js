import React from "react";
import "./Modal.css";
import AddTask from "../AddTask";

const Modal = ({ className, setDropdown, setTasks }) => {

    return (
        <div className={`${className} modal`}>
            <AddTask setDropdown={setDropdown} setTasks={(task) => setTasks(task)}></AddTask>
        </div>
    )
}

export default Modal;
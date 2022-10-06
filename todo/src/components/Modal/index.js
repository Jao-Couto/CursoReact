import React from "react";
import "./Modal.css";
import AddTask from "../AddTask";

const Modal = props => {
    const { className, setDropdown } = props;

    return (
        <div className={`${className} modal`}>

            <AddTask setDropdown={setDropdown}></AddTask>
        </div>
    )
}

export default Modal;
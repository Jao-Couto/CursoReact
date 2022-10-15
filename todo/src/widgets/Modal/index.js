import React from "react";
import "./Modal.css";
import AddTask from "../AddTask";

const Modal = ({ show, setShow, task }) => {
    return <div style={{ display: (show) ? "flex" : "none" }} className={"modal"}>
        <AddTask
            show={show}
            setShow={setShow}
            task={task}
        ></AddTask>
    </div>

};

export default Modal;

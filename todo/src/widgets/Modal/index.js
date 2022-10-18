import React from "react";
import "./Modal.css";
import SetTask from "../SetTask";

const Modal = ({ show, setShow, task }) => {
    return <div style={{ display: (show) ? "flex" : "none" }} className={"modal"}>
        <SetTask
            show={show}
            setShow={setShow}
            task={task}
        />
    </div>

};

export default Modal;

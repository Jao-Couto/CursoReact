import { useEffect, useState } from "react";
import "./Tasks.css";
import {
    FaRegEdit,
    FaTrashAlt,
    FaCheckSquare,
    FaRegSquare,
} from "react-icons/fa";
import taskService from "../../services/taskService";
import Modal from "../../widgets/Modal";

function Tasks({ typeMap }) {
    const [tasks, setTasks] = useState([]);
    const [show, setShow] = useState(false);
    const [taskEdit, setTaskEdit] = useState({});

    useEffect(() => {
        loadTasks();
    }, [typeMap, show]);

    const loadTasks = () => {
        taskService
            .getPerType(typeMap["name"].toLowerCase())
            .then((result) => {
                console.log(result.data.result);
                setTasks(result.data.result);
            })
            .catch((err) => console.log(err));
    };

    const excluirTask = (index) => {
        taskService
            .delete(tasks[index]._id)
            .then((res) => {
                loadTasks();
                console.log(res);
            })
            .catch((err) => console.log(err));
    };

    const executarTask = (index) => {
        const data = tasks[index];
        data.executada = !data.executada;
        taskService
            .update(data)
            .then((res) => {
                loadTasks();
                console.log(res);
            })
            .catch((err) => console.log(err));
    };

    const editTask = (index) => {
        const task = tasks[index];
        setTaskEdit(task)
        setShow(true)
    };

    return (
        <section className="wrapper">
            <Modal
                show={show}
                setShow={() => setShow(!show)}
                task={taskEdit}
            />
            <h1>{typeMap["name"]}</h1>
            <div className="tasks">
                {tasks.length > 0 &&
                    tasks.map((item, index) => {
                        return (
                            <div className="task" key={index}>
                                <div className="text">
                                    <h3>{item.titulo}</h3>
                                    <p>{item.descricao}</p>
                                </div>
                                <div className="info">
                                    <p style={{ fontWeight: "200" }}>
                                        {item.data.split("T")[0].split("-").reverse().join("/")}
                                    </p>
                                    <div className="icons">
                                        {typeMap["code"] !== "executadas" ? (
                                            <FaCheckSquare
                                                size={20}
                                                style={{ cursor: "pointer" }}
                                                onClick={() => {
                                                    executarTask(index);
                                                }}
                                            />
                                        ) : (
                                            <FaRegSquare
                                                size={20}
                                                style={{ cursor: "pointer" }}
                                                onClick={() => {
                                                    executarTask(index);
                                                }}
                                            />
                                        )}
                                        <FaTrashAlt
                                            style={{ margin: "0 5px", cursor: "pointer" }}
                                            size={20}
                                            onClick={() => excluirTask(index)}
                                        />
                                        <FaRegEdit style={{ cursor: "pointer" }} size={20} onClick={() => editTask(index)}></FaRegEdit>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </section>
    );
}

export default Tasks;

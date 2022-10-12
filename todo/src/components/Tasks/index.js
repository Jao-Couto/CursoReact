import { useEffect, useState } from "react"
import "./Tasks.css"
import { FaRegEdit, FaTrashAlt, FaCheckSquare, FaRegSquare } from "react-icons/fa"
import taskService from "../../services/taskService"

function Tasks({ type, dropdown }) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        loadTasks()
    }, [type, dropdown])

    const loadTasks = () => {
        const copyType = type
        taskService.getPerType(copyType.toLowerCase())
            .then((result) => {
                console.log(result.data.result);
                setTasks(result.data.result);
            })
            .catch((err) => console.log(err))
    }

    const excluirTask = (index) => {
        taskService.delete(tasks[index]._id)
            .then((res) => {
                loadTasks()
                console.log(res);
            })
            .catch(err => console.log(err))
    }


    const executarTask = (index) => {
        const data = tasks[index]
        data.executada = !data.executada
        taskService.update(data)
            .then((res) => {
                loadTasks()
                console.log(res);
            })
            .catch(err => console.log(err))
    }

    return (
        <section style={{ display: "flex", alignItems: 'center', flexDirection: 'column' }}>
            <h1>{type}</h1>
            {tasks.length > 0 && tasks.map((item, index) => {
                return <div className="tasks" key={index}>

                    <h3>{item.titulo}</h3>
                    <div>

                        {type !== "Executadas" ?
                            <FaCheckSquare size={20} onClick={() => { executarTask(index) }}></FaCheckSquare>
                            : <FaRegSquare size={20} onClick={() => { executarTask(index) }}></FaRegSquare>
                        }
                        <FaTrashAlt style={{ margin: "0 5px" }} size={20} onClick={() => excluirTask(index)}></FaTrashAlt>
                        <FaRegEdit size={20}></FaRegEdit>
                    </div>

                    <p>{item.descricao}</p>
                    <h5>{item.data.split('T')[0].split('-').reverse().join('/')}</h5>
                </div>
            })}
        </section>
    )
}

export default Tasks
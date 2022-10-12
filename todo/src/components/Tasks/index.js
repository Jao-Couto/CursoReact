import { useEffect, useState } from "react"
import "./Tasks.css"
import {FaRegEdit, FaTrashAlt, FaCheckSquare, FaRegCheckSquare, FaRegSquare} from "react-icons/fa"
import taskService from "../../services/taskService"

function Tasks({type}) {
    const [tasks, setTasks] = useState([]);

    const excluirTask = (index) => {
        const tasksExcluida = tasks.pop(index)
        setTasks(tasksExcluida)
    }


    const executarTask = (index) => {
        setTasksExecutadas([...tasksExecutadas, tasks[index]])
        const tasksExcluida = tasks.pop(index)
        setTasks(tasksExcluida)
    }

    useEffect(()=>{
        taskService.getPerType(type).
            then((result) => {setTasks(result.data); console.log(result);}).
            catch((err) => console.log(err))
    
        })
        
    const imprimirTasks = () => {
        let tasksImpirmir

        if (executadas)
            tasksImpirmir = tasksExecutadas
        else
            tasksImpirmir = tasks

        console.log("exec", tasksImpirmir);
        return tasksImpirmir.length > 0 && tasksImpirmir.map((item, index) => {
            console.log("entrou");
            let dataComparar = new Date(item.data);
            dataComparar.setDate(dataComparar.getDate() + 1);
            dataComparar = dataComparar.setHours(0, 0, 0, 0)

            const dataHoje = new Date().setHours(0, 0, 0, 0)

            const ifHoje = dataComparar === dataHoje && hoje;
            const ifProxima = dataComparar > dataHoje && proximas
            const ifAtrasada = dataComparar < dataHoje && atrasadas

            if ((((ifHoje) || (ifProxima) || (ifAtrasada)) && !item.executada) || executadas)
                return <div className="tasks" key={index}>

                    <h3>{item.titulo}</h3>
                    <div>
                        
                        {!executadas ? 
                            <FaCheckSquare  size={20} onClick={() => { executarTask(index) }}></FaCheckSquare>
                            : <FaRegSquare size={20}></FaRegSquare> 
                        }
                        <FaTrashAlt style={{margin: "0 5px"}} size={20} onClick={() => excluirTask(index)}></FaTrashAlt>  
                        <FaRegEdit size={20}></FaRegEdit> 
                    </div>

                    <p>{item.descricao}</p>
                    <h5>{item.data.split('-').reverse().join('/')}</h5>
                </div>
        })
    }

    return (
        <section style={{ display: "flex", alignItems: 'center', flexDirection: 'column' }}>
            {hoje && <h1>Hoje</h1>}
            {atrasadas && <h1>Atrasadas</h1>}
            {proximas && <h1>Próximas</h1>}
            {executadas && <h1>Executadas</h1>}
            {imprimirTasks()}
        </section>
    )
}

export default Tasks
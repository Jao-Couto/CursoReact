import "./Tasks.css"

function Tasks({ tasks, setTasks, hoje = false, atrasadas = false, proximas = false, executadas = false }) {

    const excluirTask = (index) => {
        const tasksExcluida = tasks.pop(index)
        setTasks(tasksExcluida)
    }

    const executarTask = (index) => {
        let tasksExecutadas = tasks
        tasksExecutadas[index].executada = true
        console.log(tasksExecutadas);
        setTasks(tasksExecutadas)
    }

    return (
        <section style={{ display: "flex", alignItems: 'center', flexDirection: 'column' }}>
            {tasks.length > 0 && tasks.map((item, index) => {
                let dataComparar = new Date(item.data);
                dataComparar.setDate(dataComparar.getDate() + 1);
                dataComparar = dataComparar.setHours(0, 0, 0, 0)

                const dataHoje = new Date().setHours(0, 0, 0, 0)

                const ifHoje = dataComparar === dataHoje && hoje;
                const ifProxima = dataComparar > dataHoje && proximas
                const ifAtrasada = dataComparar < dataHoje && atrasadas
                const ifExecutada = executadas && item.executada

                console.log(ifHoje,
                    ifProxima,
                    ifAtrasada,
                    ifExecutada)
                if ((((ifHoje) || (ifProxima) || (ifAtrasada)) && !item.executada) || (ifExecutada))
                    return <div className="tasks" key={index}>

                        <h3>{item.titulo}</h3>
                        <div>
                            <img src="https://cdn.pixabay.com/photo/2016/02/01/12/20/play-1173495_1280.png" alt="Play" onClick={() => { executarTask(index) }}></img>
                            <img src="https://cdn.pixabay.com/photo/2014/03/24/13/41/trashcan-293989_1280.png" alt="Lixo" onClick={() => excluirTask(index)}></img>
                            <img src="https://cdn.pixabay.com/photo/2016/07/26/05/18/pencil-1542024_1280.png" alt="Editar" ></img>
                        </div>

                        <p>{item.descricao}</p>
                        <h5>{item.data.split('-').reverse().join('/')}</h5>
                    </div>
            })}
        </section>
    )
}

export default Tasks
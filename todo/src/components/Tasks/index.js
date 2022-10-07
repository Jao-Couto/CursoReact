import "./Tasks.css"

function Tasks(props) {

    return (
        <div className="tasks">

            <h3>{props.titulo}</h3>
            <div>
                <img src="https://cdn.pixabay.com/photo/2016/02/01/12/20/play-1173495_1280.png" alt="Play"></img>
                <img src="https://cdn-icons-png.flaticon.com/512/61/61140.png" alt="options"></img>
            </div>

            <p>{props.descricao}</p>
            <h5>{props.data}</h5>
        </div>
    )
}

export default Tasks
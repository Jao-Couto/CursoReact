import { useEffect, useState } from "react";
import taskService from "../../services/taskService";
import Botao from "../../components/Botao";
import CampoTexto from "../../components/CampoTexto";
import "../ModalTasks.css";

function AddTask({ setShow, task, show }) {
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [data, setData] = useState(new Date().toISOString().split("T")[0]);

    useEffect(() => {
        if (task != undefined && Object.keys(task).length > 0) {
            setTitulo(task.titulo)
            setDescricao(task.descricao)
            setData(task.data.split("T")[0])
        }
    }, [show])

    const submit = (event) => {
        event.preventDefault();
        if (task != undefined && task != {}) {
            taskService.update({
                _id: task._id,
                titulo,
                descricao,
                data
            })
                .then((result) => console.log(result))
                .catch((error) => alert(error));
        } else {
            taskService
                .create({
                    titulo,
                    descricao,
                    data,
                    executada: false,
                })
                .then((result) => console.log(result))
                .catch((error) => alert(error));
        }
        clearInputs();
        closeModal();
    };

    const clearInputs = () => {
        setTitulo("");
        setDescricao("");
        setData(new Date().toISOString().split("T")[0]);
    };

    const closeModal = () => {
        clearInputs();
        setShow(false);
    };

    return (
        <section className="formulario">

            <form onSubmit={submit}>
                <h2 style={{ alignSelf: "center" }}>Adicionar Tarefa</h2>
                <CampoTexto
                    type="text"
                    label="Título"
                    placeholder="Insira o Título"
                    obrigatorio
                    aoAlterar={(texto) => setTitulo(texto)}
                    valor={titulo}
                ></CampoTexto>
                <CampoTexto
                    label="Descrição"
                    placeholder="Insira o Descrição"
                    obrigatorio
                    area
                    aoAlterar={(texto) => setDescricao(texto)}
                    valor={descricao}
                ></CampoTexto>
                <CampoTexto
                    type="date"
                    label="Data"
                    placeholder="Insira o data"
                    obrigatorio
                    aoAlterar={(texto) => setData(texto)}
                    valor={data}
                ></CampoTexto>
                <div className="buttons">
                    {task != undefined && task != {} && <Botao>Atualizar Tarefa</Botao> || <Botao>Criar Tarefa</Botao>}

                    <button type="button" className="cancelButton" onClick={closeModal}>
                        Fechar
                    </button>
                </div>
            </form>
        </section>
    );
}

export default AddTask;

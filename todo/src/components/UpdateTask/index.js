import { useState } from 'react'
import taskService from '../../services/taskService';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import './UpdateTask.css'

function UpdateTask(props) {
    const [titulo, setTitulo] = useState(props.titulo);
    const [descricao, setDescricao] = useState(props.descricao);
    const [data, setData] = useState(props.data);

    const submit = (event) => {
        event.preventDefault()
        taskService.update({  
            id: props.id,
            titulo,
            descricao,
            data
        }).then(result => console.log(result)).
            catch(error => alert(error))
        clearInputs()
        closeModal()
    }

    const clearInputs = () => {
        setTitulo('')
        setDescricao('')
        setData(new Date().toISOString().split('T')[0])
    }

    const closeModal = () => {
        clearInputs()
        props.setDropdown("")
        document.body.style.backgroundColor = "white"
    }

    return (
        <section className="formulario">
            <form onSubmit={submit}>
                <button type='button' className='closeButton' onClick={closeModal}>Fechar</button>
                <CampoTexto type="text" label="Título" placeholder="Insira o Título" obrigatorio aoAlterar={(texto) => setTitulo(texto)} valor={titulo}></CampoTexto>
                <CampoTexto label="Descrição" placeholder="Insira o Descrição" obrigatorio area aoAlterar={(texto) => setDescricao(texto)} valor={descricao}></CampoTexto>
                <CampoTexto type="date" label="Data" placeholder="Insira o data" obrigatorio aoAlterar={(texto) => setData(texto)} valor={data}></CampoTexto>
                <Botao>
                    Criar Tarefa
                </Botao>
            </form>
        </section>
    );
}

export default UpdateTask;

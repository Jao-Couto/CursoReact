import { useState } from 'react'
import taskService from '../../services/taskService';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import './AddTask.css'

function AddTask(props) {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [data, setData] = useState(new Date().toISOString().split('T')[0]);

    const submit = (event) => {
        event.preventDefault()
        taskService.create({  
            titulo,
            descricao,
            data,
            executada: false
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

export default AddTask;

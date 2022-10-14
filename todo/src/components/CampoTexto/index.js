import './CampoTexto.css'

const CampoTexto = (props) => {


    const aoDigitado = (evento) => {
        props.aoAlterar(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            {props.area ?
                <textarea className='input' rows={5} value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder} />
                :
                <input className='input' type={props.type} value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder} />
            }
        </div>
    )
}

export default CampoTexto
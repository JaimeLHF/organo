import './CampoTexto.css'

const CampoTexto = (props) => {

    
    const evento_input = (event) => {
       props.evento_input(event.target.value)
    }
    
    return (
        <div className="campo_texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={evento_input} required={props.obrigatorio} placeholder={props.placeholder} />
        </div>
    )
}

export default CampoTexto
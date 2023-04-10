import "./CampoTexto.css"

const CampoTexto = (props) => {
    const aoDigitar = (evento) => {
        props.aoAlterar(evento.target.value);
    }
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <h6>{props.descricao}</h6>
            <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={props.placeholder} />
        </div>
    )
}

export default CampoTexto
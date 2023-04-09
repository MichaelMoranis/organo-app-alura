import "./Botao.css"

const Botao = (props) => {
    
    return (
        <button className="btnCard">
            {props.children}
        </button>
    )
}

export default Botao
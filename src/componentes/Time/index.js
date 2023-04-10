import Colaborador from "../Colaborador"
import "./Time.css"

const Time = (props) => {
    const css = {
        backgroundColor: props.corSecundaria, 
        backgroundImage: "url(/imagens/fundo.png)"
    }
    return (
        (props.colaboradores.length > 0) ? <section className="time" style={css}>
            <p className="mudar-cor">mude a cor do  seu time</p>
           <input onChange={evento => props.mudarCor(evento.target.value, props.nome)} value={props.corPrimaria} type="color" className="input-cor" /> 
        <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
        <div className="colaboradores">
        {props.colaboradores.map(colaborador => {
            return <Colaborador 
            corDeFundo={props.corPrimaria} 
            key={colaborador.nome} 
            nome={colaborador.nome}
            sobrenome={colaborador.sobrenome} 
            cargo={colaborador.cargo} 
            imagem={colaborador.imagem} 
            aoDeletar={props.aoDeletar}/>
        })}
        </div>
    </section>
     : ""
    )
}

export default Time
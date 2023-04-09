import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = (props) => {

  const [nome, setNome] = useState("");
  const [sobrenome, setSobreNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      sobrenome,
      cargo,
      imagem,
      time
    })
    setNome("")
    setCargo("")
    setSobreNome("")
    setImagem("")
    setTime("")
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador !</h2>
        <CampoTexto 
           obrigatorio={true} 
           label="Nome" 
           placeholder="digite seu nome"
           valor={nome}
           aoAlterar={valor => setNome(valor)}
           />
        <CampoTexto 
           obrigatorio={true} 
           label="Sobrenome" 
           placeholder="digite seu sobrenome"
           valor={sobrenome}
           aoAlterar={valor => setSobreNome(valor)}
           />
        <CampoTexto 
           obrigatorio={true} 
           label="Cargo" 
           placeholder="digite o seu cargo" 
           valor={cargo}
           aoAlterar={valor => setCargo(valor)}
           />
        <CampoTexto
           label="Imagem" 
           placeholder="digite o endereco da sua imagem"
           valor={imagem}
           aoAlterar={valor => setImagem(valor)}
           />
        <ListaSuspensa 
            label="Time" 
            itens={props.nomesDosTimes}
            valor={time}
            aoAlterar={valor => setTime(valor)}
           />
        <Botao>
          Criar Card
        </Botao>
      </form>
    </section>
  );
};

export default Formulario;

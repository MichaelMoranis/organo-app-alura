import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Footer from './componentes/Footer';
import Apresentacao from './componentes/Apresentacao';

function App() {
  const [times, setTimes ] = useState([
    {

    nome: "Programacao",
    corPrimaria: "#57C278",
    corSecundaria: "#D9F7E9"
  },
  {
    nome: "Front End",
    corPrimaria: "#82CFFA",
    corSecundaria: "#E8F8FF"
  },
  {
    nome: "Data Science",
    corPrimaria: "#A6D157",
    corSecundaria: "#FQF8E12"
  },
  {
    nome: "Design",
    corPrimaria: "#ED6B69",
    corSecundaria: "#FDE7E8"
  },
  {
    nome: "UX e Design",
    corPrimaria: "#DB6EBF",
    corSecundaria: "#FAE9F5"
  },
  {
    nome: "Mobile",
    corPrimaria: "#FFBA05",
    corSecundaria: "#FFF5D9"
  },
  {
    nome: "Inovacao e Gestao",
    corPrimaria: "#FF8A29",
    corSecundaria: "#FFEEDF"
  },
]);

  const [colaboradores, setColaboradores] = useState([]);

  function deletarColaborador(nome) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.nome !== nome));
  }

  function mudarCorDoTime(cor, nome) {
    setTimes(times.map(time => {
      if(time.nome === nome) {
        time.corPrimaria = cor;
      }
      return time;
    }))
  }

  function cadastrarTime(novoTime) {
    setTimes([...times, {...novoTime}])
  }

  const colaboradorAdicionado = (colaborador) => {

    setColaboradores([...colaboradores, colaborador])
  }
  return (
    <div className="App">
      <Banner />
      <Apresentacao />
      <Formulario  
        cadastrarTime = {cadastrarTime}
        nomesDosTimes={times.map(time => time.nome)} 
        aoColaboradorCadastrado={colaborador => colaboradorAdicionado(colaborador)} />
        {times.map(time => <Time 
        mudarCor={mudarCorDoTime}
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        aoDeletar={deletarColaborador}
      /> )}
      <Footer />
    </div>
  );
}

export default App;

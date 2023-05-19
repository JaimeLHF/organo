import { useState } from 'react';
import Header from './components/Header/index.js';
import Banner from './components/Banner/Banner.js'
import Formulario from './components/Formulario/index.js';
import Time from './components/Times';
import Rodape from './components/Rodape';


function App() {

  const times = [
    {
      nome: "Programação",
      corPrimaria: "#e7e7e7",
      corSecundaria: "#486b5b",
    },

    {
      nome: "Front End",
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },

    {
      nome: "Data Science",
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },

    {
      nome: "DevOps",
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },

    {
      nome: "UX e Design",
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5',
    },

    {
      nome: "Mobile",
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9',
    },

    {
      nome: "Inovação e Gestão",
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    },


    {
      nome: "Excel VBA",
      corPrimaria: '#0000F0',
      corSecundaria: '#FFF0F0',
    },



  ]

  const [colaboradores, setColaboradores] = useState([])

  const novoColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Header />
      <Banner />
      <Formulario times={times.map(time => time.nome)} colaboradorCadastrado={colaborador => novoColaborador(colaborador)} />
      {times.map(time => <Time
        key={time.nome}
        nome={time.nome}
        corPrimaria={time.corPrimaria}
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}

      <Rodape />
    </div>
  );
}

export default App;

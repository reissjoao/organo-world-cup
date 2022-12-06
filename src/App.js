import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';

function App() {

  const times = [
    {
      nome: 'Goleiro',
      corPrimaria: '#3F795E',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Zagueiro',
      corPrimaria: '#3F795E',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Lateral',
      corPrimaria: '#3F795E',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Volante',
      corPrimaria: '#3F795E',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Meia',
      corPrimaria: '#3F795E',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Ponta',
      corPrimaria: '#3F795E',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Atacante',
      corPrimaria: '#3F795E',
      corSecundaria: '#FFEEDF'
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    debugger
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>

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

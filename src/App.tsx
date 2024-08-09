import './App.css';
import Avaliacao from './components/assessment';
import Container from './components/container';
import Title from './components/container/title';
import Footer from './components/footer';
import Grafico from './components/grafics';
import Header from './components/header';
import Tabela from './components/table';
import UseDadosConsulta from './UseDadosConsulta';
import UseDadosProficional from './UseDadosProficional';

function App() {
  const { dados: consultas, erro: ConsultasErro } = UseDadosConsulta();
  const { dados: proficionais, erro: proficionaisErro } = UseDadosProficional();

  if (ConsultasErro || proficionaisErro) {
    console.log('erro');
  }
  return (
    <>
      <Header></Header>
      <Container>
        <Title>Área Administrativa</Title>
        <Tabela consultas={consultas}></Tabela>
      </Container>
      <Footer></Footer>
      <Grafico consultas={consultas} profissionais={proficionais}></Grafico>
      <Avaliacao></Avaliacao>
    </>
  );
}

export default App;

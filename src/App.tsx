import './App.css';
import Container from './components/container';
import Title from './components/container/title';
import Footer from './components/footer';
import Header from './components/header';
import Tabela from './components/table';
import UseDadosConsulta from './UseDadosConsulta';

function App() {
  const { dados, erro } = UseDadosConsulta();
  return (
    <>
      <Header></Header>
      <Container>
        <Title>Área Administrativa</Title>
        <Tabela consultas={dados}></Tabela>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;

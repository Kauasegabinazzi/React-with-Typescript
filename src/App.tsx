import './App.css';
import Container from './components/container';
import Title from './components/container/title';
import Footer from './components/footer';
import Header from './components/header';
import Tabela from './components/table';

function App() {
  return (
    <>
      <Header></Header>
      <Container>
        <Title>Área Administrativa</Title>
        <Tabela></Tabela>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;

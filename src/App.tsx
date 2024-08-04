import './App.css';
import Container from './components/container';
import Title from './components/container/title';
import Header from './components/header';

function App() {
  return (
    <>
      <Header></Header>
      <Container>
        <Title>Área Administrativa</Title>
      </Container>
    </>
  );
}

export default App;

import './App.css';
import Container from './components/container';
import Title from './components/container/title';
import Footer from './components/footer';
import Header from './components/header';

function App() {
  return (
    <>
      <Header></Header>
      <Container>
        <Title>Área Administrativa</Title>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;

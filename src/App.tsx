import './App.css';
import Avaliacao from './components/assessment';
import Buttons from './components/button';
import Container from './components/container';
import Title from './components/container/title';
import Footer from './components/footer';
import Grafico from './components/grafics';
import Header from './components/header';
import Subtitulo from './components/subtitle';
import Tabela from './components/table';
import UseDadosConsulta from './UseDadosConsulta';
import UseDadosProficional from './UseDadosProficional';

function App() {
  const { dados: consultas, erro: ConsultasErro } = UseDadosConsulta();
  const { dados: profissionais, erro: proficionaisErro } = UseDadosProficional();

  if (ConsultasErro || proficionaisErro) {
    console.log('erro');
  }
  return (
    <>
      <Header></Header>
      <Container>
        <Title>Área Administrativa</Title>
        <Buttons>Cadastrar especialista</Buttons>
        <Title imagem="consulta">Consultas do Dia</Title>
        <Tabela consultas={consultas} />
        <Title imagem="grafico">Consultas mensais por especialista</Title>
        <Subtitulo>Dezembro/22</Subtitulo>
        <Grafico consultas={consultas} profissionais={profissionais} />
        <Title imagem="avaliacao">Avaliações de especialistas</Title>
        <Avaliacao profissionais={profissionais} />
      </Container>
    </>
  );
}

export default App;

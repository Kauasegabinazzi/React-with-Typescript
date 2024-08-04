import styled from 'styled-components';
import logo from './assets/logo.png';
import perfil from './assets/perfil.png';

const HeaderStyled = styled.header`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding: 2em 4em;
`

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-grow: .1;
`

const LinkStyled = styled.a`
    color: var(--azul-escuro);
    font-weight: 700;
`

function Header() {
    return (
        <HeaderStyled>
            <img src={logo} alt='logo da empresa' />
            <Container>
                <img src={perfil} alt="perfil do usuario" />
                <LinkStyled href="#">Sair</LinkStyled>
            </Container>
        </HeaderStyled>
    )
}

export default Header;
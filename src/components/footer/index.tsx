import styled from 'styled-components';
import facebook from './assets/facebook.png';
import google from './assets/google.png';
import instagram from './assets/instagram.png';
import whats from './assets/whatsapp.png';

const FooterStyled = styled.footer`
    height:100%;
    color: white;
    padding: 1em;
    background-color: var(--azul-escuro);
    text-align: center;
`
const UlStyled = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 95%;
    margin: 1am auto;
`

const LiStyled = styled.li`
    list-style-type:none;
`

function Footer(){
    return (
        <FooterStyled>
            <UlStyled>
                <LiStyled>
                    <a href="#">
                        <img src={facebook} alt="logo do facebook" />
                    </a>
                    <a href="#">
                        <img src={google} alt="logo do google" />
                    </a>
                    <a href="#">
                        <img src={instagram} alt="logo do instagram" />
                    </a>
                    <a href="#">
                        <img src={whats} alt="logo do whatsapp" />
                    </a>
                </LiStyled>
            </UlStyled>
            <p>2024 | Desenvolvido por Kauã Segabinazzi</p>
        </FooterStyled>
    )
}

export default Footer;
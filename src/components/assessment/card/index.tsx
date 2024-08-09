import { Rating } from "@mui/material";
import Iproficional from "../../../types/Iproficional";
import styled from "@emotion/styled";

const ContainerStyled = styled.div`
    flex: 40%;
    max-width: 100%;
    background-color: #ffffff;
    padding: 1em;
    box-shadow: 2px 2px 8px rgba(0,0,0,0.15);
    border-radius: 8px;
    color: var(--cinza);
    margin: 1em 2em 1em;
`

const ULStyled = styled.ul`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding: 0;
`

const LIStyled = styled.li`
    list-style-type: none;
`

const ItemInfoStyled = styled(LIStyled)`
    flex-grow: 1;
`

const ImgStyled = styled.img`
    border-radius: 100%;
    width: 64px;
    object-fit: cover;
    height: 64px;
    border: 2px solid var(--azul-claro);
    margin-right: 1em
`

const PName = styled.p`
    font-weight: 700;
`

const P = styled.p`
    margin: .5em 0;
    font-size: 14px
`

function Card({profissional} : {profissional: Iproficional}){
    return (
        <ContainerStyled>
            <ULStyled>
                <LIStyled>
                    <ImgStyled src={profissional.imagem} alt={`foto do perfil ${profissional.nome} `}/>
                </LIStyled>
                <ItemInfoStyled>
                    <PName>{profissional.nome}</PName>
                    <P>{profissional.especialidade}</P>
                </ItemInfoStyled>
                <LIStyled>
                    <Rating name="simple-controlled" value={profissional.nota} readOnly={true}></Rating>
                </LIStyled>
            </ULStyled>
        </ContainerStyled>
    )
}

export default Card;
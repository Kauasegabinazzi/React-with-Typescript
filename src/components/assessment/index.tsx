import styled from "@emotion/styled";
import Iproficional from "../../types/Iproficional";
import Card from "./card";

const SectionStyled = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%; 
`

function Avaliacao({ profissionais }: { profissionais: Iproficional[] | null }) {
    return (
        <SectionStyled>
            {profissionais?.map((profissional) => {
                return <Card profissional={profissional}></Card>
            })}
        </SectionStyled>
    )
}

export default Avaliacao;
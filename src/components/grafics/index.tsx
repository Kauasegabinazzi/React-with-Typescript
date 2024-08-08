import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import Iconsulta from "../../types/Iconsulta";
import Iproficional from "../../types/Iproficional";
import useDadosGrafico from "./useDadosGrafics";
import styled from "styled-components";

interface Props {
    profissionais: Iproficional[] | null,
    consultas: Iconsulta[] | null
}


interface Idados {
    nome: string,
    consultas: number
}

const SectionStyled = styled.section`
    background-color: var(--branco);
    border-radius: 16px;
`

function Grafico({ profissionais, consultas }: Props) {
    let dados: Array<Idados> = useDadosGrafico({ profissionais, consultas })
    return (
        <SectionStyled>
            <ResponsiveContainer width="100%" height={350}>
                <BarChart layout="vertical" data={dados} margin={{ top: 15, right: 40, left: 40, bottom: 20 }}>
                    <XAxis type="number"></XAxis>
                    <YAxis type="category" dataKey="name"></YAxis>
                    <Bar dataKey="consultas" fill="#083860" barSize={30}></Bar>
                </BarChart>
            </ResponsiveContainer>
        </SectionStyled>
    )
}

export default Grafico;
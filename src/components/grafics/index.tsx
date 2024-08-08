import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import Iconsulta from "../../types/Iconsulta";
import Iproficional from "../../types/Iproficional";

interface Props {
    profissionais: Iproficional[] | null,
    consultas: Iconsulta[] | null
}

function Grafico({ profissionais, consultas }: Props) {
    return (
        <ResponsiveContainer width="100%" height={350}>
            <BarChart layout="vertical" data={profissionais} margin={{top:15, right:40, left:40, bottom:20}}>
                <XAxis type="number"></XAxis>
                <YAxis type="category" dataKey="name"></YAxis>
                <Bar dataKey="consultas" fill="#083860" barSize={30}></Bar>
            </BarChart>
        </ResponsiveContainer>
    )
}

export default Grafico;
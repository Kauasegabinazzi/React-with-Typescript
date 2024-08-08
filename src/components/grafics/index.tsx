import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

function Grafico(){
    return (
        <ResponsiveContainer width="100%" height={350}>
            <BarChart layout="vertical" data={dados} margin={{top:15, right:40, left:40, bottom:20}}>
                <XAxis type="number"></XAxis>
                <YAxis type="category" dataKey="name"></YAxis>
                <Bar dataKey="consultas" fill="#083860" barSize={30}></Bar>
            </BarChart>
        </ResponsiveContainer>
    )
}

export default Grafico;
import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Table from "@mui/material/Table";
import Iconsulta from "../../types/Iconsulta";

function Tabela({ consultas }: { consultas: Iconsulta[] | null }) {
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="tabela-customizada">
                    <TableHead>
                        <TableRow>
                            <TableCell>Data</TableCell>
                            <TableCell>Horário</TableCell>
                            <TableCell>Profissional</TableCell>
                            <TableCell>Especialidade</TableCell>
                            <TableCell>Paciente</TableCell>
                            <TableCell>Modalidade</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {consultas?.map((linha) => {
                            return (
                                <TableRow>
                                    <TableCell component="th" scope="row">{linha.data}</TableCell>
                                    <TableCell>{linha.horario}</TableCell>
                                    <TableCell>{linha.profissional[0].nome}</TableCell>
                                    <TableCell>{linha.profissional[0].especialidade}</TableCell>
                                    <TableCell>{linha.paciente}</TableCell>
                                    <TableCell>{linha.modalidade}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Tabela;
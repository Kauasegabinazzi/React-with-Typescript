import Iproficional from "./Iproficional";

export default interface Iconsulta extends Iproficional{
    id: number,
    data: string,
    horario: string,
    profissional: Array<Iproficional>
    especialidade: string,
    paciente: string,
    modalidade: string,
}
import Iconsulta from "../../types/Iconsulta";
import Iproficional from "../../types/Iproficional";

interface Props {
    profissionais: Iproficional[] | null,
    consultas: Iconsulta[] | null
}


interface Idados{
    nome:string,
    consultas: number
}

const useDadosGrafico = ({ profissionais, consultas }: Props) => {
    let dados: Array<Idados> = [];

    if (profissionais && consultas) {
        dados = profissionais.map((profissional) => ({
            nome: profissional.nome,
            consultas: consultas.filter((consulta) =>
                consulta.profissional.some((prof) => prof.nome === profissional.nome)
            ).length
        }))
    }

    return dados;
}

export default useDadosGrafico;
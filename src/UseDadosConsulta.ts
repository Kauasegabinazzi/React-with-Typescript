import Iconsulta from "./types/Iconsulta";
import useFetch from "./useFetch"

const UseDadosConsulta = () => {
    return useFetch<Iconsulta[]>({ url: 'consultas' })
}

export default UseDadosConsulta;
import Iconsulta from "./types/Iconsulta";
import useFetch from "./useFetch"

const useDadosConsulta = () => {
    return useFetch<Iconsulta[]>({ url: 'consultas' });
}

export default useDadosConsulta;
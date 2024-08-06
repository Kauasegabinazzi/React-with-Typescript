import Iproficional from "./types/Iproficional";
import useFetch from "./useFetch"

const UseDadosProficional = () => {
    return useFetch<Iproficional[]>({ url: 'profissionais' })
}

export default UseDadosProficional;
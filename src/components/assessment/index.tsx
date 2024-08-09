import Iproficional from "../../types/Iproficional";
import Card from "./card";

function Avaliacao({profissionais} : {profissionais: Iproficional[] | null}){
    return (
        <section>
            {profissionais?.map((profissional) => {
                return <Card profissional={profissional}></Card>
            })}
        </section>
    )
}

export default Avaliacao;
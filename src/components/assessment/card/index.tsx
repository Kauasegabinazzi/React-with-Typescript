import { Rating } from "@mui/material";
import Iproficional from "../../../types/Iproficional";

function Card({profissional} : {profissional: Iproficional}){
    return (
        <div>
            <ul>
                <li>
                    <img src={profissional.imagem} alt={`foto do perfil ${profissional.nome} `}/>
                </li>
                <li>
                    <p>{profissional.nome}</p>
                    <p>{profissional.especialidade}</p>
                </li>
                <li>
                    <Rating name="simple-controlled" value={profissional.nota} readOnly={true}></Rating>
                </li>
            </ul>
        </div>
    )
}

export default Card;
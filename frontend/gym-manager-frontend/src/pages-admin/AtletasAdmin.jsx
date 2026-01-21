import { useState } from "react"
import {FiltrosBuscarAtleta} from '../components/FiltroBuscarAtleta'
import { ListaAtletas } from "../components/ListaAtletas"
import { useNavigate } from "react-router-dom";

export function AtletasAdmin() {
    const navigate = useNavigate();
    const [listaAtletas, setListaAtletas] = useState([]);

    const getPerfilUsuario = (idUsuario) => {
        navigate('/gym-admin/perfil-atleta', {state: {idUsuario: idUsuario}});
    }
    
    return(
    <>
    <div className="w-100">
        <FiltrosBuscarAtleta setListaAtletas={setListaAtletas} />

        <hr className="border border-primary border-2 opacity-50"/>

        <ListaAtletas listaAtletas={listaAtletas} getPerfilUsuario={getPerfilUsuario} />
    </div>
    </>
    )
}



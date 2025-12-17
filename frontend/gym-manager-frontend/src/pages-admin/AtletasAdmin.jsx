import { useState } from "react"
import {FiltrosBuscarAtleta} from '../components/FiltroBuscarAtleta'
import { ListaAtletas } from "../components/ListaAtletas"

export function AtletasAdmin() {
    const [listaAtletas, setListaAtletas] = useState([]);



    return(
    <>
    <div className="w-100">
        <FiltrosBuscarAtleta setListaAtletas={setListaAtletas} />

        <hr className="border border-primary border-2 opacity-50"/>

        <ListaAtletas listaAtletas={listaAtletas} />
    </div>
    </>
    )
}



import { Outlet, Link } from "react-router-dom"
import { ListaOfertas, ListaPlanes } from "../components/PlanesOfertasComp"


export function PlanesOfertasAdmin() {
    


    return(
    <>
    <div className="w-100">

        <div>
            <Outlet />
        </div>
    </div>    
    </>
    )
}
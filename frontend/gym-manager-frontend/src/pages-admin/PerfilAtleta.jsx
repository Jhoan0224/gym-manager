import { PerfilAtletaData } from "../components/PerfilUsuarioData"
import { useLocation } from "react-router-dom";

export function PerfilAtletaAdmin() {
    const location = useLocation();
    // access to state of this path or url
    console.log(location.state)
    const idUsuario = location.state?.idUsuario ?? ''; // varibles de state

    

    return (
    <>
        <PerfilAtletaData idUsuario={idUsuario} />
    </>
    )
}
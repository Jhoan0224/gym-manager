import { useState } from "react";
import { PerfilAtletaData } from "../components/PerfilUsuarioData";

export default function CuentaUser() {
    const [perfilUsuario, setPerfilUsuario] = useState({
        id_usuario: 1,
        nombre: "Juan",
        apellido: "Pineda",
        fecha_nacimiento: "2002-05-02T05:00:00.000Z",
        dui: "002548-7",
        telefono: "7755-2510",
        email: "juan.pineda@gmail.com",
        tipo_usuario: "ATLETA",
        plan: "Mensual"
    });
    
    return(
    <>
        <PerfilAtletaData />

    </>
    )
}
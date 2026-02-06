import { useState } from "react"
import { FormRegistrarAtleta, FormRegistrarResponsable, FormRegistrarAtletaJunior } from "../components/FormRegistrarAtleta";
import { registerAtleta , registerResponsable, registerAtletaJunior } from "../api/admin-usuarios.api.js";


export const OPCIONES_REGISTRO = {
    ATLETA: 1, RESPONSABLE: 2, ATLETA_JUNIOR: 3
}

export function RegistrarAtleta() {
    const [tipoRegistro, setTipoRegistro] = useState("");
    const [formAtleta, setFormAtleta] = useState({
        nombre: '', apellido: '', email: '', dui: '', fechaNacimiento: '', genero: '', peso: '', idPlan: ''
    })
    const [formAResponsable, setFormResponsable] = useState({
        nombre: '', apellido: '', email: '', dui: '', fechaNacimiento: '', genero: ''
    })
    const [formAtletaJunior, setFormAtletaJunior] = useState({
        emailResponsable: '', nombre: '', apellido: '', fechaNacimiento: '', genero: '', peso: '', idPlan: ''
    })
    
    // esta const debe esta antes de FormRegistroUsuario
    const sendFormRegistrarUsuario = {
        [OPCIONES_REGISTRO.ATLETA] : () => registerAtleta(formAtleta).then(),
        [OPCIONES_REGISTRO.RESPONSABLE] : () =>  registerResponsable(formAResponsable).then(),        
        [OPCIONES_REGISTRO.ATLETA_JUNIOR] : () => registerAtletaJunior(formAtletaJunior).then()
    }

    const FormRegistroUsuario = {
        "": <TipoRegistroAtleta setTipoRegistro={setTipoRegistro} />,

        [OPCIONES_REGISTRO.ATLETA]: <FormRegistrarAtleta
                formAtleta={formAtleta} setFormAtleta={setFormAtleta}
                sendFormRegistrarUsuario={sendFormRegistrarUsuario}
            />,
        [OPCIONES_REGISTRO.RESPONSABLE]: <FormRegistrarResponsable
                formResponsable={formAResponsable} setFormResponsable={setFormResponsable}
                sendFormRegistrarUsuario={sendFormRegistrarUsuario}
            />,
        [OPCIONES_REGISTRO.ATLETA_JUNIOR]: <FormRegistrarAtletaJunior 
                formAtletaJunior={formAtletaJunior} setFormAtletaJunior={setFormAtletaJunior}
                sendFormRegistrarUsuario={sendFormRegistrarUsuario}
            />
    }

    return(
    <>
    <div className="d-flex flex-column w-100">

        <h5 className="text-center fs-5">THE-GYM | Registro de Atleta</h5>
        
        <div className="border border-3 rounded-2 text-center p-3 m-auto">
            {
                FormRegistroUsuario[tipoRegistro]
            }
        </div>

    </div>
    
    </>
    )
}

function TipoRegistroAtleta({setTipoRegistro}) {

    return(
    <>
    <div>
        <h5 className="fs-5">Tipo de Registro</h5>

        <div className="d-flex gap-3 justify-content-center my-4">
            <button type="button" onClick={() => setTipoRegistro(OPCIONES_REGISTRO.ATLETA_JUNIOR)} className="btn btn-success">
                AtletasJR <b>-18</b>
            </button>
            <button type="button" onClick={() => setTipoRegistro(OPCIONES_REGISTRO.RESPONSABLE)} className="btn btn-warning">
                Responsable <br />AtletasJr
            </button>
            <button type="button" onClick={() => setTipoRegistro(OPCIONES_REGISTRO.ATLETA)} className="btn btn-primary">
                Atletas <b>+18</b>
            </button>
        </div>

        <p>Seleccionar la opción correcta en base a la Edad del Atleta a Inscribir.</p>
    </div>
    </>
    )
}
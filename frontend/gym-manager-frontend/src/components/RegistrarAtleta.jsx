import { useState } from "react"
import { FormRegistrarAtletaMayorEdad, FormRegistrarAtletaMenorEdad } from "./FormRegistrarAtleta";


export function RegistrarAtleta() {
    const [atletaMayorEdad, setAtletaMayorEdad] = useState(null);
    const [formAtletaMayorEdad, setFormAtletaMayorEdad] = useState({
        nombre: '', apellido: '', email: '', dui: '', fechaNacimiento: '', genero: '', peso: '', idPlan: ''
    })
    const [formAtletaMenorEdad, setFormAtletaMenorEdad] = useState({
        formResponsable: {
            nombre: '', apellido: '', email: '', dui: '', fechaNacimiento: '', genero: ''
        },
        formAtleta: {
            nombre: '', apellido: '', fechaNacimiento: '', genero: '', peso: '', idPlan: ''
        }
    })

    const FormRegistroAtleta = {
        null: <TipoRegistroAtleta setAtletaMayorEdad={setAtletaMayorEdad} />,
        false: <FormRegistrarAtletaMenorEdad 
                    formAtletaMenorEdad={formAtletaMenorEdad} setFormAtletaMenorEdad={setFormAtletaMenorEdad}
                />,
        true: <FormRegistrarAtletaMayorEdad
                    formAtletaMayorEdad={formAtletaMayorEdad} setFormAtletaMayorEdad={setFormAtletaMayorEdad}
            />
    }

    return(
    <>
    <div className="d-flex flex-column w-100">

        <h5 className="text-center fs-5">THE-GYM | Registro de Atleta</h5>
        
        <div className="border border-3 rounded-2 text-center p-3 m-auto">
            {
                FormRegistroAtleta[atletaMayorEdad]
            }
        </div>

    </div>
    
    </>
    )
}

function TipoRegistroAtleta({setAtletaMayorEdad}) {

    return(
    <>
    <div>
        <h5 className="fs-5">Tipo de Registro</h5>

        <div className="d-flex gap-3 justify-content-center my-4">
                <button type="button" onClick={() => setAtletaMayorEdad(false)} className="btn btn-success">
                    Menor de Edad <b>-18</b>
                </button>
                <button type="button" onClick={() => setAtletaMayorEdad(true)} className="btn btn-primary">
                    Mayor de Edad <b>+18</b>
                </button>
        </div>

        <p>Seleccionar la opción correcta en base a la Edad del Atleta a Inscribir.</p>
    </div>
    </>
    )
}
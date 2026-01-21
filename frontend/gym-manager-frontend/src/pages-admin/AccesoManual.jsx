import { useState } from "react"
import { AccesoManualAtleta, AccesoManualAtletaNoReg } from "../components/FormAccesoManual"

const TIPO_ACCESO = {ATLETA: 1, ATLETA_NO_REGISTRADO: 2}



export default function AccesoManual() {
    const [tipoAcceso, setTipoAcceso] = useState('');
    const [formAccesoAtleta, setFormAccesoAtleta] = useState({
        email: '', tiempoEntreno: ''
    });
    const [formAccesoAtletaNoReg, setFormAccesoAtletaNoReg] = useState({
        genero: '', tiempoEntreno: ''
    });

    const FORM_ACCESO = {
        '':() =>  <TipoAccesoManual
            setTipoAcceso={setTipoAcceso} TIPO_ACCESO={TIPO_ACCESO} />,

        [TIPO_ACCESO.ATLETA]: () => <AccesoManualAtleta 
            formAccesoAtleta={formAccesoAtleta}
            setFormAccesoAtleta={setFormAccesoAtleta} />,

        [TIPO_ACCESO.ATLETA_NO_REGISTRADO]: () => <AccesoManualAtletaNoReg 
            formAccesoAtletaNoReg={formAccesoAtletaNoReg}
            setFormAccesoAtletaNoReg={setFormAccesoAtletaNoReg}/>
    }
    return(
        <>
    <div className="d-flex flex-column w-100">
        <h5 className="fs-5 text-center">THE-GYM | Acceso</h5>


        <div className="border border-2 rounded-2 p-3 m-auto">
            {
                FORM_ACCESO[tipoAcceso]()
            }
           
        </div>

    </div>
    </>
    )
}


function TipoAccesoManual({setTipoAcceso, TIPO_ACCESO}) {
    return(
    <>
    <div>
        <h5 className="fs-5 text-center">Tipo de Acceso</h5>

        <div className="d-flex gap-3 justify-content-center my-4">
            <button type="button" onClick={() => setTipoAcceso(TIPO_ACCESO.ATLETA)} className="btn btn-primary">
                Atleta <i className="bi bi-person-check fs-5"></i>
            </button>
            <button type="button" onClick={() => setTipoAcceso(TIPO_ACCESO.ATLETA_NO_REGISTRADO)} className="btn btn-warning">
                Atleta No Registrado
            </button>
        </div>

        <p>Seleccionar la opción correcta en base a la Edad del Atleta a Inscribir.</p>
    </div>
    </>
    )
}
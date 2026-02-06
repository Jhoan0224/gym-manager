import { useState } from "react";
import { findUserById, findUserByEmail, findUserByNames } from "../api/admin-usuarios.api";
import { ToastMessage } from "./ToastMessage";

const TIPO_BUSQUEDA = {
    NOMBRE_APELLIDO: 1, EMAIL: 2, ID: 3 
}
    

export function FiltrosBuscarAtleta({setListaAtletas}){
    const [filtroSelected, setFiltroSelected] = useState(TIPO_BUSQUEDA.NOMBRE_APELLIDO);
    const [formBuscarAtleta, setFormBuscarAtleta] = useState({
        nombre: '', //F1
        apellido: '', //F1
        email: '', //F2
        idUsuario: '' //F3
    });

    const sendFormBuscarAtleta = {
        [TIPO_BUSQUEDA.NOMBRE_APELLIDO]: () => findUserByNames(formBuscarAtleta.nombre, formBuscarAtleta.apellido).then(data => setListaAtletas(data.data)),
        [TIPO_BUSQUEDA.EMAIL]: () => findUserByEmail(formBuscarAtleta.email).then(data => setListaAtletas(data.data)),
        [TIPO_BUSQUEDA.ID]: () => findUserById(formBuscarAtleta.idUsuario).then(data => setListaAtletas(data.data))
    };

    return(
    <>
    <div>
        <h5 className="fs-6">Buscar Atleta:</h5>
        <div>
            <div className="row m-2">

                {/* <div className="col-auto mt-auto mb-0">
                    <label htmlFor="filtro" className="form-label"> Tipo de Usuario:</label>
                    <select name="tipoBusqueda" id="buscarAtleta" defaultValue={TIPO_BUSQUEDA.NOMBRE_APELLIDO} className="form-select"
                        >
                        <option value={TIPO_BUSQUEDA.ATLETA}>Atleta</option>
                        <option value={TIPO_BUSQUEDA.RESPONSABLE}>Responsable</option>
                        <option value={TIPO_BUSQUEDA.ATLETA_JUNIOR}>Atleta Jr</option>
                    </select>
                </div> */}
                <div className="col-auto mt-auto mb-0">
                    <label htmlFor="filtro" className="form-label"> Buscar por:</label>
                    <select name="buscarAtleta" id="buscarAtleta" defaultValue={TIPO_BUSQUEDA.NOMBRE_APELLIDO} className="form-select"
                        onChange={(e) => setFiltroSelected(e.target.value)} >
                        <option value={TIPO_BUSQUEDA.NOMBRE_APELLIDO}>Nombre y Apellido</option>
                        <option value={TIPO_BUSQUEDA.EMAIL}>Email de Atleta</option>
                        <option value={TIPO_BUSQUEDA.ID}>ID de Atleta</option>
                    </select>
                </div>

                <div className="col-auto d-flex gap-3">
                    {
                        // renderizado utilizando literal objects
                        ({
                            [TIPO_BUSQUEDA.NOMBRE_APELLIDO]: <BuscarAtletaF1 formBuscarAtleta={formBuscarAtleta} setFormBuscarAtleta={setFormBuscarAtleta} />,
                            [TIPO_BUSQUEDA.EMAIL]: <BuscarAtletaF2 formBuscarAtleta={formBuscarAtleta} setFormBuscarAtleta={setFormBuscarAtleta} />,
                            [TIPO_BUSQUEDA.ID]: <BuscarAtletaF3 formBuscarAtleta={formBuscarAtleta} setFormBuscarAtleta={setFormBuscarAtleta} />
                        })[filtroSelected]
                    }
                    <div className="mt-auto mb-0">
                        <button type="button" onClick={() => sendFormBuscarAtleta[filtroSelected]()} className="btn btn-primary px-2"><i className="bi bi-search me-2"></i>
                            Buscar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </>
    )

}
 function BuscarAtletaF3({formBuscarAtleta, setFormBuscarAtleta}) {
    return(
    <>
    <div className="d-flex gap-3">
        <div>
            <label htmlFor="idUsuario" className="form-label">ID de Atleta</label>
            <input type="text" name="idUsuario" id="idUsuario" className="form-control"
                value={formBuscarAtleta.idUsuario}
                onChange={(e) => setFormBuscarAtleta({...formBuscarAtleta, [e.target.name]: e.target.value})}

            />
        </div>
    </div>    
    </>
    )
 }

function BuscarAtletaF2({formBuscarAtleta, setFormBuscarAtleta}) {

    return(
    <>
    <div className="d-flex gap-3">
        <div>
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" name="email" id="email" className="form-control"
                value={formBuscarAtleta.email}
                onChange={(e) => setFormBuscarAtleta({...formBuscarAtleta, [e.target.name]: e.target.value})}
            />
        </div>
    </div>  
    </>
    )
}

function BuscarAtletaF1({ formBuscarAtleta, setFormBuscarAtleta}) {
    
    return(
    <>
    <div className="d-flex gap-3">
        <div>
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input type="text" name="nombre" id="nombre" className="form-control"
                value={formBuscarAtleta.nombre}
                onChange={(e) => setFormBuscarAtleta({...formBuscarAtleta, [e.target.name]: e.target.value})}
            />
        </div>
        <div>
            <label htmlFor="apellido" className="form-label">Apellido</label>
            <input type="text" name="apellido" id="apellido" className="form-control"
                value={formBuscarAtleta.apellido}
                onChange={(e) => setFormBuscarAtleta({...formBuscarAtleta, [e.target.name]: e.target.value})}

            />
        </div>
    </div>
    </>
    )
}
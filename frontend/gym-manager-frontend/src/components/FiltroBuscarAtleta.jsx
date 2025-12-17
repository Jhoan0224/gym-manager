import { useState } from "react";
import { getListaAtletas } from "../api/AdminApi";


export function FiltrosBuscarAtleta({setListaAtletas}){
    const [filtroSelected, setFiltroSelected] = useState("F1");
    const [formBuscarAtleta, setFormBuscarAtleta] = useState({
        nombre: '', //F1
        apellido: '', //F1
        email: '', //F2
        idAtleta: '' //F3
    });

    const sendFormBuscarAtleta = (event) => {
        const atletas = getListaAtletas().then(console.log);
    }

    return(
    <>
    <div>
        <h5 className="fs-6">Buscar Atleta:</h5>
        <div>
            <div className="row m-2">

                <div className="col-auto mt-auto mb-0">
                    <label htmlFor="filtro" className="form-label"> Filtros</label>
                    <select name="buscarAtleta" id="buscarAtleta" defaultValue="F1" className="form-select"
                        onChange={(e) => setFiltroSelected(e.target.value)} >
                        <option value="F1">Nombre y Apellido</option>
                        <option value="F2">Email de Atleta</option>
                        <option value="F3">ID de Atleta</option>
                    </select>
                </div>

                <div className="col-auto d-flex gap-3">
                    {
                        // renderizado utilizando literal objects
                        ({
                            'F1': <BuscarAtletaF1 setFormBuscarAtleta={setFormBuscarAtleta} />,
                            'F2': <BuscarAtletaF2 setFormBuscarAtleta={setFormBuscarAtleta} />,
                            'F3': <BuscarAtletaF3 setFormBuscarAtleta={setFormBuscarAtleta} />
                        })[filtroSelected]
                    }
                    <div className="mt-auto mb-0">
                        <button type="button" onClick={(event) => sendFormBuscarAtleta(event)} className="btn btn-primary px-2"><i className="bi bi-search me-2"></i>
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
 function BuscarAtletaF3({setFormBuscarAtleta}) {
    return(
    <>
    <div className="d-flex gap-3">
        <div>
            <label htmlFor="idAtleta" className="form-label">ID de Atleta</label>
            <input type="text" name="idAtleta" id="idAtleta" className="form-control"
                value={setFormBuscarAtleta.idAtleta}
                onChange={(e) => setFormBuscarAtleta({...setFormBuscarAtleta, [e.target.name]: e.target.value})}

            />
        </div>
    </div>    
    </>
    )
 }

function BuscarAtletaF2({setFormBuscarAtleta}) {

    return(
    <>
    <div className="d-flex gap-3">
        <div>
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" name="email" id="email" className="form-control"
                value={setFormBuscarAtleta.email}
                onChange={(e) => setFormBuscarAtleta({...setFormBuscarAtleta, [e.target.name]: e.target.value})}
            />
        </div>
    </div>  
    </>
    )
}

function BuscarAtletaF1({setFormBuscarAtleta}) {
    
    return(
    <>
    <div className="d-flex gap-3">
        <div>
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input type="text" name="nombre" id="nombre" className="form-control"
                value={setFormBuscarAtleta.nombre}
                onChange={(e) => setFormBuscarAtleta({...setFormBuscarAtleta, [e.target.name]: e.target.value})}
            />
        </div>
        <div>
            <label htmlFor="apellido" className="form-label">Apellido</label>
            <input type="text" name="apellido" id="nombre" className="form-control"
                value={setFormBuscarAtleta.apellido}
                onChange={(e) => setFormBuscarAtleta({...setFormBuscarAtleta, [e.target.name]: e.target.value})}

            />
        </div>
    </div>
    </>
    )
}
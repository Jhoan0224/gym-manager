import { useState, useEffect } from "react";
import { getPerfilUsuario, getSuscripcionUserData } from "../api/usuario-account.api"



export function PerfilAtletaData() {
    const [perfilUsuario, setPerfilUsuario] = useState({
        id_usuario: 1,
        nombre: "",
        apellido: "",
        fecha_nacimiento: "",
        dui: "",
        telefono: "",
        email: "",
        tipo_usuario: "",
        plan: ""
    });

    // call api and load the data'user
    useEffect(() => {
        // Solo se ejecuta cuando idUsuario cambia
        getPerfilUsuario()
            .then(data => {
                setPerfilUsuario(data.perfilUsuario);
            })
            .catch(err => console.error("Error al cargar perfil:", err));
    }, []);

    console.log(perfilUsuario)

    
    return (
    <>
    <div className="w-100">
        <div className="row bg-body-secondary border border-2 rounded-1 h-100">
            <div className="col-auto mx-auto">

                <div className="p-4 text-center">
                    <i className="bi bi-file-person fs-1"></i>
                    <h5 className="fs-5">{perfilUsuario.nombre}</h5>
                    <h5 className="fs-6">Tipo Usuario:<br />{perfilUsuario.tipo_usuario}</h5>
                </div>

            </div>

            <div className="col p-4 bg-light h-100">
                <div className="d-flex flex-wrap gap-5">
                    <div>
                        <h5 className="fs-5">Información personal</h5>
                        <ul className="list-group">
                            <li className="list-group-item"><b>Nombres</b>: {perfilUsuario.nombre}</li>
                            <li className="list-group-item"><b>Apellidos</b>: {perfilUsuario.apellido}</li>
                            <li className="list-group-item"><b>Fecha Nacimiento</b>:{perfilUsuario.fecha_nacimiento} </li>
                            <li className="list-group-item"><b>Email</b>: {perfilUsuario.email}</li>
                            <li className="list-group-item"><b>Telefono</b>: {perfilUsuario.telefono}</li>
                            <li className="list-group-item"><b>DUI</b>: {perfilUsuario.dui}</li>
                        </ul>
                    </div>
                    <div>
                        <h5  className="fs-5">Información del Usuario</h5>
                        <ul className="list-group">
                            <li className="list-group-item"><b>Tipo de Usuario</b>: {perfilUsuario.tipo_usuario}</li>
                            <li className="list-group-item"><b>Plan de Entrenamiento</b>: {perfilUsuario.plan}</li>
                        </ul>
                    </div>
                </div>
                <div className="d-flex gap-3 my-3">
                    <button className="btn btn-outline-primary">Mi Suscripción</button>
                    <button className="btn btn-outline-primary">Actualizar mis Datos</button>
                    <button className="btn btn-outline-primary">Contactar a Servicio al Cliente</button>
                </div>
                <div>

                </div>
            </div>
        </div>
    </div> 
    </>
    )
}

export function PlanEntrenoUserData() {
    const [userSuscripcion, setUserSuscripcion] = useState({
        // id_usuario: 1,
        // nombre: "",
        // apellido: "",
        // email: "",
        // tipo_usuario: "",   
    });
    const [dataSuscripcion, setDataSuscripcion] = useState({
        // plan: "",
        // costo: '',
        // renovacionAutomatica: '',
        // inicio: "",
        // finalizacion: ""
    });
    const [pagosSuscripcion, setPagosSuscripcion] = useState([]);


    useEffect(() => {
        // Solo se ejecuta cuando idUsuario cambia
        getSuscripcionUserData()
            .then(data => {
                setUserSuscripcion(data.usuarioInfo),
                setDataSuscripcion(data.suscripcionInfo),
                setPagosSuscripcion(data.suscripcionPagos);
            })
            .catch(err => console.error("Error al cargar perfil:", err));
    }, []);

    return(
    <>
    <div className="w-100">
        <h4 className="fs-4 text-center">Suscripción | Plan de Entrenamiento</h4>
        <div className="my-3">
            <h5 className="fs-5">Suscripción | Detalles de Usuario</h5>
            <div className="p-3">
                <ul className="list-group list-group-horizontal">
                    <li className="list-group-item"><b>Usuario</b>: {userSuscripcion.nombre} {userSuscripcion.apellido}</li>
                    <li className="list-group-item"><b>Email</b>: {userSuscripcion.email}</li>
                    <li className="list-group-item"><b>Tipo de Usuario</b>: {userSuscripcion.tipo_usuario}</li>
                </ul>
            </div>
        </div>

        <div className="mb-4">
            <h5 className="fs-5">Suscripción | Detalles de la Suscripción</h5>
            <div className="d-flex gap-4 p-3">
                <ul className="list-group">
                    <li className="list-group-item"><b>Plan Suscrito</b>: {dataSuscripcion.plan}</li>
                    <li className="list-group-item"><b>Costo $</b>: {dataSuscripcion.precio}</li>
                    <li className="list-group-item"><b>Inicio</b>: {dataSuscripcion.fechaInicio}</li>
                    <li className="list-group-item"><b>Finaliza</b>: {dataSuscripcion.fechaFinalizacion}</li>
                    <li className="list-group-item"><b>Renovacion automatica</b>: {dataSuscripcion.estado}</li>
                </ul>
                <ul className="list-group">
                    <li className="list-group-item"><a href="#">Info. Acerca de las Suscripciones</a></li>
                    <li className="list-group-item">
                        <button className="btn btn-outline-primary">
                            Actualizar Plan
                        </button>
                    </li>
                    <li className="list-group-item">
                        <button className="btn btn-outline-warning">
                            Cancela Suscripción
                        </button>
                    </li>
                </ul>
            </div>
        </div>


        <div>
            <h5 className="fs-5">Suscripción | Mis pagos</h5>
            <div className="p-3">
                <table className="table table-striped table-hover border">
                    <thead>
                        <tr>
                            <th>Plan seleccionado</th>
                            <th>Fecha de cancelacion</th>
                            <th>Monto total</th>
                            <th>Metodo de pago</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pagosSuscripcion.map(pago => (
                            <tr key={pago.id_suscripcion_pago}>
                                <td>{pago.id_suscripcion_pago}</td>
                                <td>{pago.fecha_hora_pago}</td>
                                <td>{pago.monto_total}</td>
                                <td>{pago.metodo_pago}</td>
                                <td><button className="btn btn-info">Ver detalles</button></td>
                            </tr>              
                        ))}
                    </tbody>
                </table>
            </div>  
        </div>
    </div>
    </>
    )
}
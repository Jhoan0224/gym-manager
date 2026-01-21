import { useState } from "react";
import { PlanEntrenoUserData } from "../components/PerfilUsuarioData";

export default function PlanEntrenoUser() {
    const [perfilUsuario, setPerfilUsuario] = useState({
        id_usuario: 1,
        nombre: "Juan Tulio",
        apellido: "Pineda Mendoza",
        fecha_nacimiento: "2002-05-02T05:00:00.000Z",
        dui: "002548-7",
        telefono: "7755-2510",
        email: "juan.pineda@gmail.com",
        tipo_usuario: "ATLETA",
        plan: "Mensual"
    });

    const [historial, setHistorial] = useState([
        {
            "id": 1,
            "planSeleccionado": "Premium Mensual",
            "fechaCancelacion": "2026-02-15",
            "metodoPago": "Visa **** 4242"
        },
        {
            "id": 2,
            "planSeleccionado": "Básico Anual",
            "fechaCancelacion": "2026-05-20",
            "metodoPago": "PayPal (usuario@email.com)"
        },
        {
            "id": 3,
            "planSeleccionado": "Pro Trimestral",
            "fechaCancelacion": "2026-01-10",
            "metodoPago": "Mastercard **** 8812"
        },
        {
            "id": 4,
            "planSeleccionado": "Plan Familiar",
            "fechaCancelacion": "2026-03-05",
            "metodoPago": "Apple Pay"
        },
        {
            "id": 5,
            "planSeleccionado": "Estudiante",
            "fechaCancelacion": "2026-06-12",
            "metodoPago": "Visa **** 1150"
        }
        ]
    );
    

    return(
    <>
    <PlanEntrenoUserData />

    </>
    )
}



    {/*
    <div className="w-100">
        <h4 className="fs-4 text-center">Suscripción | Plan de Entrenamiento</h4>
        <div className="my-3">
            <h5 className="fs-5">Suscripción | Detalles de Usuario</h5>
            <div className="p-3">
                <ul className="list-group list-group-horizontal">
                    <li className="list-group-item"><b>Usuario</b>: {perfilUsuario.nombre} {perfilUsuario.apellido}</li>
                    <li className="list-group-item"><b>Email</b>: {perfilUsuario.email}</li>
                    <li className="list-group-item"><b>Tipo de Usuario</b>: {perfilUsuario.tipo_usuario}</li>
                </ul>
                
            </div>
        </div>

        <div className="mb-4">
            <h5 className="fs-5">Suscripción | Detalles de la Suscripción</h5>
            <div className="d-flex gap-4 p-3">
                <ul className="list-group">
                    <li className="list-group-item"><b>Plan Suscrito</b>: Mensual</li>
                    <li className="list-group-item"><b>Costo $</b>: 15.00</li>
                    <li className="list-group-item"><b>Inicio</b>: 05-10-2025</li>
                    <li className="list-group-item"><b>Finaliza</b>: 05-11-2025</li>
                    <li className="list-group-item"><b>Renovacion automatica</b>: Desactivado</li>
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
                            <th>Metodo de pago</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {historial.map(pago => (
                            <tr key={pago.id}>
                                <td>{pago.planSeleccionado}</td>
                                <td>{pago.fechaCancelacion}</td>
                                <td>{pago.metodoPago}</td>
                                <td><button className="btn btn-info">Ver detalles</button></td>
                            </tr>              
                        ))}
                    </tbody>
                </table>
            </div>  
        </div>
    </div>
    */}
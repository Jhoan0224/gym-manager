import { useEffect, useState } from "react"
import { getListaPlanes } from "../api/gym-api";

export function PagoUserLocal() {
    const [renderConfirmarPago, setRenderConfirmarPago] = useState(false);
    const [formPagoSuscripcion, SetFormPagoSuscripcion] = useState({
        email: '', dui: '', idPlan: '1'
    });

    const [listaPlanes, setListaPlanes] = useState([
        // {idPlan: 1, nombre: 'Mensual', precio: 20.00}, {idPlan: 2, nombre: 'Trimestral', precio: 50.05}, {idPlan: 3, nombre: 'Semestral', precio: 100.00},
    ]);
    
    useEffect(() => {
        getListaPlanes().then(data => setListaPlanes(data.listaPlanes));
    }, []);
    
    const realizarPago = () => {
        alert('oki')
    }

    const RenderPagoLocal = {
        false:
            <SuscripcionPagoUser listaPlanes={listaPlanes} formPagoSuscripcion={formPagoSuscripcion}
                SetFormPagoSuscripcion={SetFormPagoSuscripcion} setRenderConfirmarPago={setRenderConfirmarPago}
            />,
        true: 
            <ConfirmarPagoUser formPagoSuscripcion={formPagoSuscripcion} realizarPago={realizarPago} 
                listaPlanes={listaPlanes} setRenderConfirmarPago={setRenderConfirmarPago} 
            />,
    }

    return(
    <>
    <div className="w-100">
        <div className="text-center p-2">
            <h5 className="fs-5">THE-GYM | Pagos de Suscripción-Gym Usuario</h5>
        </div>
        <div className="d-flex justify-content-center">

            {   
                RenderPagoLocal[renderConfirmarPago]
            }
            </div>
    </div>
    </>
    )
}

function SuscripcionPagoUser({listaPlanes, formPagoSuscripcion, SetFormPagoSuscripcion, setRenderConfirmarPago}) {

    return(
    <>
    <div className="px-4 py-3 border border-2 rounded-2">
        <div className="text-center">
            <h5 className="fs-5">Formulario de Pago</h5>
        </div>
    <form className="d-inline-block mx-3">
        <div className="m-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" name='email' id='email' className="form-control w-auto" autoComplete="false"
                value={formPagoSuscripcion.email}
                onChange={({target}) => SetFormPagoSuscripcion({...formPagoSuscripcion, [target.name]: target.value})}
                />
        </div>
        <div className="m-3">
            <label htmlFor="dui" className="form-label">DUI</label>
            <input type="text" name='dui' id='dui' className="form-control w-auto" autoComplete="false"
                value={formPagoSuscripcion.dui}
                onChange={({target}) => SetFormPagoSuscripcion({...formPagoSuscripcion, [target.name]: target.value})}
                />
        </div>
        <div className="m-3">
            <label htmlFor="idPlan" className="form-label">Plan de Suscripción</label>
            <select name="idPlan" id="idPlan" className="form-select w-auto" defaultValue=""
                onChange={({target}) => SetFormPagoSuscripcion({...formPagoSuscripcion, [target.name]: target.value})}>
                <option value="" disabled>Seleccionar</option>

                {listaPlanes.map(plan => (
                    <option key={plan.id_plan} value={plan.id_plan}>{plan.nombre} {plan.precio}</option>
                ))}
            </select>
        </div>
        <div className="d-flex p-3">
            <button type="button" onClick={() => setRenderConfirmarPago(true)} className="btn btn-success mx-auto">Realizar Pago</button>
        </div>
    </form>    
    </div>
    </>
    )
}

function ConfirmarPagoUser({formPagoSuscripcion, realizarPago, listaPlanes, setRenderConfirmarPago}) {

    return(
    <>
    <div className="border border-2 rounded-2 p-4">
        <ul className="list-group mb-4">
            <li className="list-group-item"><b>Email</b>: {formPagoSuscripcion.email}</li>
            <li className="list-group-item"><b>DUI</b>: {formPagoSuscripcion.dui}</li>
            <li className="list-group-item"><b>idPlan</b>: {formPagoSuscripcion.idPlan}</li>
            <li className="list-group-item"><b>Plan de Suscripción</b>: {listaPlanes.find(plan => plan.idPlan === Number(formPagoSuscripcion.idPlan))?.nombre || "Plan no encontrado"}</li>
            <li className="list-group-item"><b>Total a pagar</b>: ${listaPlanes.find(plan => plan.idPlan === Number(formPagoSuscripcion.idPlan))?.precio || "Plan no encontrado"}</li>
            
        </ul>

        <div className="d-flex justify-content-between m-2">
            <button type="button" onClick={() => setRenderConfirmarPago(false)} className="btn btn-warning">Cancelar</button>
            <button type="button" onClick={() => realizarPago()} className="btn btn-danger">Confirmar Pago</button>
        </div>
    </div>
    </>
    )
}
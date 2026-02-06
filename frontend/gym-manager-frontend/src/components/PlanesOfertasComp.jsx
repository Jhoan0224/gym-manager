import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { addNewOferta, addNewPlan, deleteOferta, updatePlan, deletePlan, getListaOfertas, getListaPlanes, getOfertaConfig, getPlanConfig, updateOferta } from "../api/super-admin";

export function PlanesOfertasComp() {
    const [renderPlan, setRenderPlan] = useState(true);
    const RenderView = {
        true: <ListaPlanes />,
        false: <ListaOfertas />            
    }

    return(
    <>
    <div className="d-flex my-2">
        <h5 className="fs-5 mx-auto">GYM-365<span> | </span>
            <button type="button" onClick={() => setRenderPlan(true)} className="btn btn-outline-primary">Planes</button><span> – </span>
            <button type="button" onClick={() => setRenderPlan(false)} className="btn btn-outline-primary">Ofertas</button></h5>
    </div>
    <div>
        {
            RenderView[renderPlan]
        }
    </div>
    </>
    )
}

export function ListaOfertas() {
    const [listaOfertas, setListaOfertas] = useState([
        {id_oferta: 1, nombre: 'Oferta Navidena', descripcion: 'Muy buen inicio', descuento: '10'},
        {id_oferta: 2, nombre: 'Oferta Fin de Mes', descripcion: 'Muy buen progreso', descuento: '5'},
    ])

    useEffect(() => {
        const getOfertas = async () => {
            const data = await getListaOfertas();
            if (data.success) {
                setListaOfertas(data.listaOfertas);
            }
        };
        getOfertas();
    }, []);

    return(
    <>
    <div>
        <div className="d-flex my-2">
            <h5 className="fs-5">Ofertas Actuales</h5>
            <Link to='add-oferta' className="btn btn-success mx-auto me-0">Agregar Oferta</Link>
        </div>
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Costo</th>
                    <th>Opciones</th>
                </tr>
            </thead>
            <tbody>
                {listaOfertas.map(oferta => (
                    <tr key={oferta.id_oferta}>
                        <td>{oferta.id_oferta}</td>
                        <td>{oferta.nombre}</td>
                        <td>{oferta.descripcion}%</td>
                        <td>{oferta.descuento}%</td>
                        <td><Link to={`config-oferta/${oferta.id_oferta}`} className="btn btn-primary">Configuracion</Link></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    </>
    )
};

export function ListaPlanes() {
    const [listaplanes, setListaplanes] = useState([
        {id_plan: 1, nombre: 'Mensual', descripcion: 'Muy buen inicio', precio: '20.00'},
        {id_plan: 2, nombre: 'Bimensual', descripcion: 'Muy buen progreso', precio: '30.55'},
    ])

    useEffect(() => {
        const getPlanes = async () => {
            const data = await getListaPlanes();
            if (data.success) {
                setListaplanes(data.listaPlanes);
            }
        };
        getPlanes();
    }, []);

    return(
    <>
    <div>
        <div className="d-flex my-2">
            <h5 className="fs-5">Planes Actuales</h5>
            <Link to="add-plan" className="btn btn-success mx-auto me-0">Agregar Plan</Link>
        </div>
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Costo</th>
                    <th>Opciones</th>
                </tr>
            </thead>
            <tbody>
                {listaplanes.map(plan => (
                    <tr key={plan.id_plan}>
                        <td>{plan.id_plan}</td>
                        <td>{plan.nombre}</td>
                        <td>{plan.descripcion}</td>
                        <td>$ {plan.precio}</td>
                        <td><Link to={`config-plan/${plan.id_plan}`} className="btn btn-primary">Configuracion</Link></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    </>
    )
}

export function ConfigurePlanComp() {
    const params = useParams();
    const [viewInfo, setViewInfo] = useState(true);
    const [planInfo, setPlanInfo] = useState({        
        idPlan: 1,
        nombre: "Plan Premium Mensual",
        descripcion: "Acceso ilimitado a todos los cursos y mentorías personalizadas.",
        precio: 29.99,
        cantidad_suscripciones: 75,
        fecha_registro: "2024-01-28"
    });

    useEffect(() => {
        const getPlan = async () => {
            const data = await getPlanConfig(params.idPlan);
            if (data.success) {
                setPlanInfo(data.planInfo);
            }
        };
        getPlan();
    }, []);
   
    const eliminarPlan = async () => {
        const respuesta = window.confirm('Seguro que deseas eliminar el PLAN?');
        if(respuesta) {
            const data = await deletePlan(params.idPlan);
            alert(data.message);
        }
    }

    const sendUpdatePlan = async (formUpdPlan) => {
        const respuesta = window.confirm('Seguro que deseas actualizar el PLAN?');
        if(respuesta) {
            formUpdPlan.num_meses = 10;
            formUpdPlan.id_plan = params.idPlan;
            const data = await updatePlan(formUpdPlan);
            alert(data.message);
        }
    }
    
    const RenderView = {
        true: <InfoPlan eliminarPlan={eliminarPlan} planInfo={planInfo} setViewInfo={setViewInfo} />,
        false: <UpdatePlan sendUpdatePlan={sendUpdatePlan} planInfo={planInfo} setViewInfo={setViewInfo} />,
    }


    return(
    <>
    <div className="d-flex my-2">
        <h5 className="fs-5 mx-auto">GYM-365<span> | </span>
            <Link to='..' className="link-primary text-decoration-none">Planes – Ofertas</Link>
        </h5>
    </div>
    <div >
        {
            RenderView[viewInfo]
        }
    </div>
    </>
    )
}

function InfoPlan({eliminarPlan, planInfo, setViewInfo}) {

    return(
    <>
    <div className="border border-2 rounded-2 p-4">
        <ul className="list-group my-3">
            <li className="list-group-item"><b>ID</b>: {planInfo.idPlan}</li>
            <li className="list-group-item"><b>Nombre</b>: {planInfo.nombre}</li>
            <li className="list-group-item"><b>Descripcion</b>: {planInfo.descripcion}</li>
            <li className="list-group-item"><b>Precio</b>: {planInfo.precio}</li>
            <li className="list-group-item"><b>Cant. de Suscripciones</b>: {planInfo.cantidad_suscripciones}</li>
            <li className="list-group-item">Fecha de Registro: {planInfo.fecha_registro}</li>
        </ul>

        <div className="d-flex gap-4">
            <button type="button" onClick={() => setViewInfo(false)} className="btn btn-success">Actualizar Datos</button>
            <button type="button" onClick={() => eliminarPlan()} className="btn btn-primary">Eliminar Plan</button>
        </div>
    </div>
    </>
    )
}

export function UpdatePlan({sendUpdatePlan, planInfo, setViewInfo}) {
    const [updPlanForm, setUpdPlanForm] = useState({
        nombre: '', descripcion: '', precio: ''
    });
    const updateForm = ({target: {name, value}}) => {
        setUpdPlanForm({...updPlanForm, [name]: value});
    }
    useEffect(() => {
        setUpdPlanForm({...planInfo})
    }, []);

    const sendForm = (event) => {
        event.preventDefault();
        sendUpdatePlan(updPlanForm);
    }

    return(
    <>
    <div className="d-flex flex-column align-items-center  w-100">
        <form onSubmit={(event) => sendForm(event)} className="d-inline-block border border-2 rounded-2 p-4 w-50">
            <div className="mb-3">
                <h5 className="text-center fs-5">Actualizando Datos Plan</h5>
            </div>
            <label htmlFor="idPlan" className="form-label fw-bold">ID Plan: {planInfo.idPlan}</label>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input type="text" name="nombre" id="nombre" className="form-control"
                    value={updPlanForm.nombre} onChange={updateForm}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="descripcion" className="form-label">Descripcion</label>
                <input type="text" name="descripcion" id="descripcion" className="form-control"
                    value={updPlanForm.descripcion} onChange={updateForm}
                />
            </div>
            <div>
                <label htmlFor="precio" className="form-label">Precio</label>
                <input type="number" name="precio" id="precio" className="form-control w-25" placeholder="$"
                    inputmode="decimal"
                    value={updPlanForm.precio} onChange={updateForm}
                />
            </div>

            <div className="d-flex mt-4">
                <button type="button" onClick={() => setViewInfo(true)} className="btn btn-warning">Cancelar</button>
                <button type="submit" className="btn btn-success mx-auto">Actualizar Plan</button>
            </div>
        </form>
    </div>
    </>
    )
}

export function AddPlan() {
    const [addPlanForm, setAddPlanForm] = useState({
        nombre: '', descripcion: '', precio: '', num_meses: ''
    });
    const updateForm = ({target: {name, value}}) => {
        setAddPlanForm({...addPlanForm, [name]: value});
    }

    const sendForm = async (event) => {
        event.preventDefault();
        const respuesta = window.confirm("¿Quieres guardar los cambios?");
        if (respuesta) {
            const data = await addNewPlan(addPlanForm);
            alert(data.message);
        }
    }

    return(
    <>
    <div className="d-flex flex-column align-items-center  w-100">
        <div className="d-flex my-2">
            <h5 className="fs-5 mx-auto">GYM-365<span> | </span>
                <Link to='..' className="link-primary text-decoration-none">Planes – Ofertas</Link>
            </h5>
        </div>
        <form onSubmit={(event) => sendForm(event)} className="d-inline-block border border-2 rounded-2 p-4 w-50">
            <div className="mb-3">
                <h5 className="text-center fs-5">Agregando Nuevo Plan</h5>
            </div>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input type="text" name="nombre" id="nombre" className="form-control"
                    value={addPlanForm.nombre} onChange={updateForm}
                    />
            </div>
            <div className="mb-3">
                <label htmlFor="descripcion" className="form-label">Descripcion</label>
                <input type="text" name="descripcion" id="descripcion" className="form-control"
                    value={addPlanForm.descripcion} onChange={updateForm}
                    />
            </div>
            <div className="d-flex gap-4">
                <div className="w-50">
                    <label htmlFor="precio" className="form-label">Precio</label>
                    <input type="number" name="precio" id="precio" className="form-control" placeholder="$"
                        value={addPlanForm.precio} onChange={updateForm}
                        />
                </div>
                <div className="w-50">
                    <label htmlFor="num_meses" className="form-label">Numero de Meses</label>
                    <input type="number" name="num_meses" id="num_meses" className="form-control w-50" placeholder="#"
                        min='1' max="100" step='1' 
                        value={addPlanForm.num_meses} onChange={updateForm}
                        />
                </div>
            </div>
            <div className="d-flex mt-4">
                <button type="submit" className="btn btn-primary mx-auto">Agregar Plan</button>
            </div>
        </form>
    </div>
    </>
    )
}

export function ConfigureOfertaComp() {
    const params = useParams();
    const [viewInfo, setViewInfo] = useState(true);
    const [ofertaInfo, setOfertaInfo] = useState({
        id_oferta: 1,
        nombre: "Oferta de fin a;o",
        descripcion: "Accede a nuestra oferta por tiempo tiempo limitado.",
        descuento: 10,
        fechaInicio: '2026-01-05',
        fechaFinalizacion: '2026-02-05',
        fecha_registro: "2024-01-28"
    });


    useEffect(() => {
        const getOferta = async () => {
            const data = await getOfertaConfig(params.idOferta);
            if (data.success) {
                console.log(data.ofertaInfo)
                setOfertaInfo(data.ofertaInfo);
            }
        };
        getOferta();
    }, []);

    const eliminarOferta = async () => {
        const respuesta = window.confirm('Seguro que deseas eliminar la Oferta?');
        if(respuesta) {
            const data = await deleteOferta(params.idOferta);
            alert(data.message);
        }    }

    const sendUpdateOferta = async (formUpdOferta) => {
        const respuesta = window.confirm(`¿Quieres guardar los cambios en la oferta actual ${params.id_oferta}?`);
        if (respuesta) {
            formUpdOferta.id_oferta =params.idOferta;
    console.log(formUpdOferta)
            const resp = await updateOferta(formUpdOferta);
            alert(resp.message);
        }
    }

    const RenderView = {
        true: <InfoOferta eliminarOferta={eliminarOferta} ofertaInfo={ofertaInfo} setViewInfo={setViewInfo} />,
        false: <UpdateOferta sendUpdateOferta={sendUpdateOferta} ofertaInfo={ofertaInfo} setViewInfo={setViewInfo} />,
    }


    return(
    <>
    <div className="d-flex my-2">
        <h5 className="fs-5 mx-auto">GYM-365<span> | </span>
            <Link to='..' className="link-primary text-decoration-none">Planes – Ofertas</Link>
        </h5>
    </div>
    <div >
        {
            RenderView[viewInfo]
        }
    </div>
    </>
    )
}

function InfoOferta({eliminarOferta, ofertaInfo, setViewInfo}) {

    return(
    <>
    <div className="border border-2 rounded-2 p-4">
        <ul className="list-group my-3">
            <li className="list-group-item"><b>ID</b>: {ofertaInfo.id_oferta}</li>
            <li className="list-group-item"><b>Nombre</b>: {ofertaInfo.nombre}</li>
            <li className="list-group-item"><b>Descripcion</b>: {ofertaInfo.descripcion}</li>
            <li className="list-group-item"><b>Descuento</b>: {ofertaInfo.descuento}%</li>
            <li className="list-group-item"><b>Fecha Inicio</b>: {ofertaInfo.fechaInicio}</li>
            <li className="list-group-item"><b>Fecha Finalizacion</b>: {ofertaInfo.fechaFinalizacion}</li>
            <li className="list-group-item"><b>Fecha de Registro</b>: {ofertaInfo.fecha_registro}</li>
        </ul>

        <div className="d-flex gap-4">
            <button type="button" onClick={() => setViewInfo(false)} className="btn btn-success">Actualizar Datos</button>
            <button type="button" onClick={() => eliminarOferta()} className="btn btn-primary">Eliminar Oferta</button>
        </div>
    </div>
    </>
    )
}

export function UpdateOferta({sendUpdateOferta, ofertaInfo, setViewInfo}) {
    const [updOfertaForm, setUpdOfertaForm] = useState({
        nombre: '', descripcion: '', descuento: '', fechaIncio: '', fechaFinalizacion: ''
    });
    const updateForm = ({target: {name, value}}) => {
        setUpdOfertaForm({...updOfertaForm, [name]: value});
    }
    useEffect(() => {
        setUpdOfertaForm({...ofertaInfo})
    }, []);

    const sendForm = (e) => {
        e.preventDefault();
        sendUpdateOferta(updOfertaForm);
    }
    return(
    <>
    <div className="d-flex flex-column align-items-center  w-100">
        <form onSubmit={(event) => sendForm(event)} className="d-inline-block border border-2 rounded-2 p-4 w-50">
            <div className="mb-3">
                <h5 className="text-center fs-5">Actualizando Datos Plan</h5>
            </div>
            <label htmlFor="idPlan" className="form-label fw-bold">ID Plan: {ofertaInfo.id_oferta}</label>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input type="text" name="nombre" id="nombre" className="form-control"
                    value={updOfertaForm.nombre} onChange={updateForm}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="descripcion" className="form-label">Descripcion</label>
                <input type="text" name="descripcion" id="descripcion" className="form-control"
                    value={updOfertaForm.descripcion} onChange={updateForm}
                />
            </div>
            <div className="d-flex gap-4 mb-3">
                <div>
                    <label htmlFor="fechaIncio" className="form-label">Fecha Inicio</label>
                    <input type="date" name="fechaIncio" id="fechaIncio" className="form-control" placeholder="Porcentaje"
                        value={updOfertaForm.fechaIncio} onChange={updateForm}
                        />
                </div>
                <div>
                    <label htmlFor="fechaFinalizacion" className="form-label">Fecha Finalizacion</label>
                    <input type="date" name="fechaFinalizacion" id="fechaFinalizacion" className="form-control" placeholder="Porcentaje"
                        value={updOfertaForm.fechaFinalizacion} onChange={updateForm}
                        />
                </div>
            </div>
            <div>
                <label htmlFor="descuento" className="form-label">Descuento</label>
                <input type="number" name="descuento" id="descuento" className="form-control w-25" placeholder="Porcentaje"
                    min='1' max="100" step='1' 
                    value={updOfertaForm.descuento} onChange={updateForm}
                    />
            </div>

            <div className="d-flex mt-4">
                <button type="button" onClick={() => setViewInfo(true)} className="btn btn-warning">Cancelar</button>
                <button type="submit" className="btn btn-success mx-auto">Actualizar Oferta</button>
            </div>
        </form>
    </div>
    </>
    )
}

export function AddOferta() {
    const [addOfertaForm, setAddOfertaForm] = useState({
        nombre: '', descripcion: '', descuento: '', fechaIncio: '', fechaFinalizacion: '',
    });
    const updateForm = ({target: {name, value}}) => {
        setAddOfertaForm({...addOfertaForm, [name]: value});
    }

    const sendForm = async (event) => {
        event.preventDefault();
        const respuesta = window.confirm("¿Quieres guardar los cambios?");
        if (respuesta) {
            const data = await addNewOferta(addOfertaForm);
            alert(data.message);
        }
    }

    return(
    <>
    <div className="d-flex flex-column align-items-center  w-100">
        <div className="d-flex my-2">
            <h5 className="fs-5 mx-auto">GYM-365<span> | </span>
                <Link to='..' className="link-primary text-decoration-none">Planes – Ofertas</Link>
            </h5>
        </div>
        <form onSubmit={(event) => sendForm(event)} className="d-inline-block border border-2 rounded-2 p-4 w-50">
            <div className="mb-3">
                <h5 className="text-center fs-5">Agregando Nueva Oferta</h5>
            </div>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input type="text" name="nombre" id="nombre" className="form-control"
                    value={addOfertaForm.nombre} onChange={updateForm}
                    />
            </div>
            <div className="mb-3">
                <label htmlFor="descripcion" className="form-label">Descripcion</label>
                <input type="text" name="descripcion" id="descripcion" className="form-control"
                    value={addOfertaForm.descripcion} onChange={updateForm}
                    />
            </div>
            <div className="d-flex gap-4 mb-3">
                <div>
                    <label htmlFor="fechaIncio" className="form-label">Fecha Inicio</label>
                    <input type="date" name="fechaIncio" id="fechaIncio" className="form-control" placeholder="Porcentaje"
                        value={addOfertaForm.fechaIncio} onChange={updateForm}
                        />
                </div>
                <div>
                    <label htmlFor="fechaFinalizacion" className="form-label">Fecha Finalizacion</label>
                    <input type="date" name="fechaFinalizacion" id="fechaFinalizacion" className="form-control" placeholder="Porcentaje"
                        value={addOfertaForm.fechaFinalizacion} onChange={updateForm}
                        />
                </div>
            </div>
            <div>
                <label htmlFor="descuento" className="form-label">Descuento</label>
                <input type="number" name="descuento" id="descuento" className="form-control w-25" placeholder="Porcentaje"
                    min='1' max="100" step='1' 
                    value={addOfertaForm.descuento} onChange={updateForm}
                    />
            </div>
            <div className="d-flex mt-4">
                <button type="submit" className="btn btn-primary mx-auto">Agregar Oferta</button>
            </div>
        </form>
    </div>
    </>
    )
}

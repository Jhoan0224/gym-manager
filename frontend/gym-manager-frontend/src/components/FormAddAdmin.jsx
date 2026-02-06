import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { addNewAdmin, deleteAdmin, getAdminConfig, updateAdminData } from "../api/super-admin";


export function PerfilAdminConfig() {
    const params = useParams();
    const [updateAdminView, setUpdateAdminView] = useState(false);
    const [adminInfo, setAdminInfo] = useState({
        id_admin: '', nombre: '', apellido: '', email: '', fecha_nacimiento: '', dui: '', telefono: '', roles: []
    });

    useEffect(() => {
        const getAdmin = async () => {
            const data = await getAdminConfig(params.idAdmin);
            if (data.success) {
                setAdminInfo({...data.adminInfo});
            }
        };
        getAdmin();
    }, []);

    const sendUpdateAdmin = async (formUpdateAdmin) => {
        formUpdateAdmin.id_admin = params.idAdmin;
        const resp = await updateAdminData(formUpdateAdmin);
        alert(resp.message);
    }

    const sendDeleteAdmin = async () => {
        const respuesta = window.confirm("Seguro de eliminar el admin?");
        if (respuesta) {
            const resp = await deleteAdmin(params.idAdmin);
            alert(resp.message)  
        }
    }

    return(
    <>
    <div>
    <div className="row bg-body-secondary border border-2 w-100">
        <div className="col-auto mx-auto  p-4">
            <div className="p-4 text-center">
                <i className="bi bi-file-person fs-1"></i>
                <h5 className="fs-5">{adminInfo.nombre}</h5>
                <h5 className="fs-6">Tipo Usuario:<br /> Administrador</h5>
            </div>

        </div>
        <div className="col bg-body-tertiary p-4">
            <div className="d-flex gap-4 mb-3">
                <ul className="list-group w-50">
                    <li className="list-group-item"><b>ID</b>: {params.idAdmin}</li>
                    <li className="list-group-item"><b>Nombres</b>: {adminInfo.nombre}</li>
                    <li className="list-group-item"><b>Apellidos</b>: {adminInfo.apellido}</li>
                    <li className="list-group-item"><b>Fecha de Nacimiento</b>: {adminInfo.fecha_nacimiento}</li>
                </ul>
                <ul className="list-group w-50">
                    <li className="list-group-item"><b>Email</b>: {adminInfo.email}</li>
                    <li className="list-group-item"><b>Telefono</b>: {adminInfo.telefono}</li>
                    <li className="list-group-item"><b>DUI</b>: {adminInfo.dui}</li>
                    <li className="list-group-item"><b>Fecha de Registro</b>: {adminInfo.roles}</li>
                </ul>
            </div>
            <ul className="list-group w-auto">
                <li className="list-group-item"><b>Roles</b>: {adminInfo.roles}</li>
            </ul>

            <div className="py-3">
                <h5 className="fs-5">Configuración:</h5>
                <div className="d-flex gap-4">
                    <button type="button" onClick={() => setUpdateAdminView(true)} className="btn btn-primary">
                        Actualizar Datos
                        <i className="bi bi-upload ms-2"></i>
                    </button>
                    <button className="btn btn-warning">
                        Suspender Cuenta
                        <i className="bi bi-pause-circle ms-2"></i>
                    </button>
                    <button type="button" onClick={() => sendDeleteAdmin()} className="btn btn-danger">
                        Eliminar Cuenta
                        <i className="bi bi-exclamation-diamond ms-2"></i>
                    </button>
                </div>
            </div>
            {
                updateAdminView && <FormUpdateAdmin sendUpdateAdmin={sendUpdateAdmin} adminInfo={adminInfo} setCancelar={setUpdateAdminView} />
            }
        </div>
    </div>
    </div>
    </>
    )
}

export function FormUpdateAdmin({sendUpdateAdmin, adminInfo, setCancelar}) {
    const [formUpdateAdmin, setFormUpdateAdmin] = useState({
        nombre: '', apellido: '', dui: '', telefono: '', roles: []
    });

    useEffect(() => {
        setFormUpdateAdmin({...adminInfo});
    }, []);

    const updateForm = (event) => {
        const {name, value} = event.target;
        setFormUpdateAdmin({...formUpdateAdmin, [name]: value});
    }

    const sendForm = (event) => {
        event.preventDefault();
        const respuesta = window.confirm('Seguro de actualizar la info del administrador?');
        if(respuesta) { sendUpdateAdmin(formUpdateAdmin);}
    }

    return(
    <>
    <form onSubmit={(event) => sendForm(event)} className="border border-2 rounded-2 p-4 d-inline-block">
        <div className="mb-4 text-center">
            <h5 className="fs-5">Formulario de Nuevo Administrador</h5>
        </div>
        <div className="d-flex gap-4 mb-4">
            <div>
                <label htmlFor="nombre" className="form-label">Nombres</label>
                <input type="text" name="nombre" id="nombre" className="form-control"
                    value={formUpdateAdmin.nombre}
                    onChange={updateForm}
                />
            </div>
            <div>
                <label htmlFor="apellido" className="form-label">Apellidos</label>
                <input type="text" name="apellido" id="apellido" className="form-control"
                    value={formUpdateAdmin.apellido}
                    onChange={updateForm}
                    />
            </div>
        </div>
        <div className="d-flex gap-4 mb-4">
            <div>
                <label htmlFor="telefono" className="form-label">Telefono</label>
                <input type="text" name="telefono" id="telefono" className="form-control"
                    value={formUpdateAdmin.telefono}
                    onChange={updateForm}
                />
            </div>
            <div>
                <label htmlFor="dui" className="form-label">DUI</label>
                <input type="text" name="dui" id="dui" className="form-control"
                    value={formUpdateAdmin.dui}
                    onChange={updateForm}
                    />
            </div>
        </div>
        <div className="d-flex">
            <button type="button" onClick={() => setCancelar(false)} className="btn btn-warning mx-auto">
                Cancelar
            </button>
            <button type="submit" className="btn btn-success mx-auto">
                Actualizar Administrador
            </button>
        </div>
    </form>
    </>
    )
}

export function FormAddAdmin() {
    const [viewFormAddAmin, setViewFormAddAmin] = useState(true);
    const [formAddAdmin, setFormAddAdmin] = useState({
        nombre: 'Nombre', apellido: 'Apellido', fechaNacimiento: '2002-05-10', dui: '051121-7', telefono: '77845-2320'
    });

    const sendForm = async () => {
        const result = await addNewAdmin(formAddAdmin);
        alert(`${result.success} >> ${result.message}`);
    }

    const RenderViewFormAddAdmin = {
        true:
            <RegistarNuevoAdmin setViewFormAddAmin={setViewFormAddAmin} formAddAdmin={formAddAdmin} setFormAddAdmin={setFormAddAdmin}/>,
        false:
            <ConfirmarAddAdmin setViewFormAddAmin={setViewFormAddAmin} sendForm={sendForm} formAddAdmin={formAddAdmin}/>
    }
    return(
    <>
    <div className="d-flex justify-content-center w-100">
        {
            RenderViewFormAddAdmin[viewFormAddAmin]
        }
    </div>
    </>
    )
}

function RegistarNuevoAdmin({setViewFormAddAmin, formAddAdmin, setFormAddAdmin}) {
    
    const updateForm = (event) => {
        const {name, value} = event.target;
        setFormAddAdmin({...formAddAdmin, [name]: value});
    }
    const sendForm = (event) => {
        event.preventDefault();
        setViewFormAddAmin(false);
    }
    return (
    <>
    <form onSubmit={(event) => sendForm(event)} className="border border-2 rounded-2 p-4 d-inline-block">
        <div className="mb-4 text-center">
            <h5 className="fs-5">Formulario de Nuevo Administrador</h5>
        </div>
        <div className="d-flex gap-4 mb-3">
            <div>
                <label htmlFor="nombre" className="form-label">Nombres</label>
                <input type="text" name="nombre" id="nombre" className="form-control"
                    value={formAddAdmin.nombre}
                    onChange={updateForm}
                    />
            </div>
            <div>
                <label htmlFor="apellido" className="form-label">Apellidos</label>
                <input type="text" name="apellido" id="apellido" className="form-control"
                    value={formAddAdmin.apellido}
                    onChange={updateForm}
                    />
            </div>
        </div>
        <div className="d-flex gap-4 mb-3">
            <div>
                <label htmlFor="telefono" className="form-label">Telefono</label>
                <input type="text" name="telefono" id="telefono" className="form-control"
                    value={formAddAdmin.telefono}
                    onChange={updateForm}
                    />
            </div>
            <div>
                <label htmlFor="dui" className="form-label">DUI</label>
                <input type="text" name="dui" id="dui" className="form-control"
                    value={formAddAdmin.dui}
                    onChange={updateForm}
                    />
            </div>
        </div>
        <div className="mb-4">           
            <label htmlFor="fechaNacimiento" className="form-label">Fecha de Nacimiento</label>
            <input type="date" name="fechaNacimiento" id="fechaNacimiento" className="form-control  w-auto"
                value={formAddAdmin.fechaNacimiento}
                onChange={updateForm}
                />
        </div>
        <div className="d-flex">
            <button type="submit" className="btn btn-success mx-auto">
                Crear Administrador
            </button>
        </div>
    </form>
    </>
    )
}

function ConfirmarAddAdmin({setViewFormAddAmin, sendForm, formAddAdmin}) {

    return(
    <>
    <div className="border border-2 rounded-2 p-4">
        <h5 className="fs-5 text-center">Confirmar nuevo registro</h5>
        <div className="d-flex gap-4 my-4"> 
            <ul className="list-group">
                <li className="list-group-item"><b>Nombres</b>: {formAddAdmin.nombre}</li>
                <li className="list-group-item"><b>Apellidos</b>: {formAddAdmin.apellido}</li>
                <li className="list-group-item"><b>Fecha de Nacimiento</b>: {formAddAdmin.fechaNacimiento}</li>
            </ul>
            <ul className="list-group">
                <li className="list-group-item"><b>Telefono</b>: {formAddAdmin.telefono}</li>
                <li className="list-group-item"><b>DUI</b>: {formAddAdmin.dui}</li>
            </ul>
        </div>
        <div className="d-flex gap-3 justify-content-center p-2">
            <button type="button" onClick={() => setViewFormAddAmin(true)} className="btn btn-primary">Cancelar</button>
            <button type="button" onClick={() => sendForm()} className="btn btn-success">Confirmar Registro</button>
        </div>
    </div>
    </>
    )
}
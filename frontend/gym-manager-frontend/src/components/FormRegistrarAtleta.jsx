import { OPCIONES_REGISTRO } from "../pages-admin/RegistrarAtleta"


export function FormRegistrarAtletaJunior({formAtletaJunior, setFormAtletaJunior, sendFormRegistrarUsuario}) {

    const updateForm = (event) => {
        setFormAtletaJunior({...formAtletaJunior, [event.target.name]: event.target.value})
    }

    const sendForm = (event) =>{
        event.preventDefault();
        sendFormRegistrarUsuario[OPCIONES_REGISTRO.ATLETA_JUNIOR]();
    }
    return(
    <>
    <div>
        <form onSubmit={(event) => sendForm(event)} className="d-flex flex-column gap-4 p-2">
            <div className="d-flex flex-column gap-2">
                <h5 className="fs-6 mb-1">Información del Responsable</h5>
                <div className="d-flex gap-4">
                    <div>
                        <label htmlFor="email" className="form-label">Email del Responsale</label>
                        <input type="email" name="emailResponsable" id="correo" className="form-control" 
                            value={formAtletaJunior.emailResponsable} onChange={updateForm}
                        />
                    </div>
                    <div>
                        <label htmlFor="dui" className="form-label">DUI</label>
                        <input type="text" name="dui" id="dui" className="form-control" 
                        />
                    </div>
                </div>
            </div>

            <div className="d-flex flex-column gap-2">
                <h5 className="fs-6 mb-1">Información del Atleta</h5>

                <div className="d-flex gap-4">
                    <div>
                        <label htmlFor="nombre" className="form-label">Nombres</label>
                        <input type="text" name="nombre" id="nombre" className="form-control" 
                            value={formAtletaJunior.nombre} onChange={updateForm}
                        />
                    </div>
                    <div>
                        <label htmlFor="apellido" className="form-label">Apellidos</label>
                        <input type="text" name="apellido" id="apellido" className="form-control" 
                            value={formAtletaJunior.apellido} onChange={updateForm}
                        />
                    </div>
                    <div>
                        <label htmlFor="genero" className="form-label">Género</label>
                        <select name="genero" onChange={updateForm} id="genero" defaultValue="" className="form-select">
                            <option value="" disabled>Seleccionar</option>
                            <option value="1">Masculino</option>
                            <option value="2">Femenino</option>
                        </select>
                    </div>
                </div>
                <div className="d-flex gap-4">
                    <div>
                        <label htmlFor="fechaNacimiento" className="form-label">Fecha de Nacimiento</label>
                        <input type="date" name="fechaNacimiento" id="fechaNacimiento" className="form-control" 
                            value={formAtletaJunior.fechaNacimiento} onChange={updateForm}
                        />
                    </div>
                    <div>
                        <label htmlFor="peso" className="form-label">Peso-Kg</label>
                        <input type="text" name="peso" id="peso" className="form-control" 
                            value={formAtletaJunior.peso} onChange={updateForm}
                        />
                    </div>
                    <div>
                        <label htmlFor="idPlan" className="form-label">Plan de Entrenamiento</label>
                        <select name="idPlan" onChange={updateForm} id="idPlan" defaultValue="" className="form-select">
                            <option value="" disabled>Selecciona una opción</option>
                            <option value="1">Plan Mensual</option>
                            <option value="2">Plan Trimestral</option>
                            <option value="3">Plan Semestral</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="mx-auto">
                <button type="submit" className="btn btn-warning">Registrar Atleta JR</button>
            </div>
        </form>    
    </div>
    </>
    )
}

export function FormRegistrarResponsable({formResponsable, setFormResponsable, sendFormRegistrarUsuario}) {

    const updateForm = (event) => {
        setFormResponsable(prevData => ({...prevData, [event.target.name]: event.target.value}));
    }

    return(
    <>
    <div>
        <h5 className="fs-6 mb-3">Formulario de Registro</h5>
        <form onSubmit={(e) => {e.preventDefault(), sendFormRegistrarUsuario[OPCIONES_REGISTRO.RESPONSABLE]()}} className="d-flex flex-column gap-3">
            <div className="d-flex gap-4">
                <div>
                    <label htmlFor="nombre" className="form-label">Nombres</label>
                    <input type="text" name="nombre" id="nombre" className="form-control" 
                        value={formResponsable.nombre} onChange={updateForm}
                    />
                </div>
                <div>
                    <label htmlFor="apellido" className="form-label">Apellidos</label>
                    <input type="text" name="apellido" id="apellido" className="form-control" 
                        value={formResponsable.apellido} onChange={updateForm}
                    />
                </div>
            </div>

            <div className="d-flex gap-4">
                <div>
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" name="email" id="email" className="form-control" 
                        value={formResponsable.email} onChange={updateForm}
                    />
                </div>
                <div>
                    <label htmlFor="dui" className="form-label">DUI</label>
                    <input type="text" name="dui" id="dui" className="form-control" 
                        value={formResponsable.dui} onChange={updateForm}
                    />
                </div>
            </div>
            <div className="d-flex gap-4">
                <div>
                    <label htmlFor="genero" className="form-label">Género</label>
                    <select name="genero" onChange={updateForm} id="genero" defaultValue="" className="form-select">
                        <option value="" disabled>Seleccionar</option>
                        <option value="1">Masculino</option>
                        <option value="2">Femenino</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="fechaNacimiento" className="form-label">Fecha de Nacimiento</label>
                    <input type="date" name="fechaNacimiento" id="fechaNacimiento" className="form-control" 
                        value={formResponsable.fechaNacimiento} onChange={updateForm}
                    />
                </div>
            </div>
            <div className="mx-auto">
                <button type="submit" className="btn btn-warning">Registrar Responsable</button>
            </div>
        </form>
    </div>
    </>
    )
}

export function FormRegistrarAtleta({formAtleta, setFormAtleta, sendFormRegistrarUsuario}) {

    const updateForm = (event) => {
        setFormAtleta(prevData => ({...prevData, [event.target.name]: event.target.value}));
    }

    return(
    <>
    <div>
        <h5 className="fs-6 mb-3">Formulario de Registro</h5>
        <form onSubmit={(e) => {e.preventDefault(), sendFormRegistrarUsuario[OPCIONES_REGISTRO.ATLETA]()}} className="d-flex flex-column gap-3">
            <div className="d-flex gap-4">
                <div>
                    <label htmlFor="nombre" className="form-label">Nombres</label>
                    <input type="text" name="nombre" id="nombre" className="form-control" 
                        value={formAtleta.nombre} onChange={updateForm}
                    />
                </div>
                <div>
                    <label htmlFor="apellido" className="form-label">Apellidos</label>
                    <input type="text" name="apellido" id="apellido" className="form-control" 
                        value={formAtleta.apellido} onChange={updateForm}
                    />
                </div>
            </div>

            <div className="d-flex gap-4">
                <div>
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" name="email" id="email" className="form-control" 
                        value={formAtleta.email} onChange={updateForm}
                    />
                </div>
                <div>
                    <label htmlFor="dui" className="form-label">DUI</label>
                    <input type="text" name="dui" id="dui" className="form-control" 
                        value={formAtleta.dui} onChange={updateForm}
                    />
                </div>
            </div>
            <div className="d-flex gap-4">
                <div>
                    <label htmlFor="genero" className="form-label">Género</label>
                    <select name="genero" onChange={updateForm} id="genero" defaultValue="" className="form-select">
                        <option value="" disabled>Seleccionar</option>
                        <option value="1">Masculino</option>
                        <option value="2">Femenino</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="fechaNacimiento" className="form-label">Fecha de Nacimiento</label>
                    <input type="date" name="fechaNacimiento" id="fechaNacimiento" className="form-control" 
                        value={formAtleta.fechaNacimiento} onChange={updateForm}
                    />
                </div>
            </div>
            <div className="d-flex gap-4">
                <div>
                    <label htmlFor="peso" className="form-label">Peso-Kg</label>
                    <input type="text" name="peso" id="peso" className="form-control" 
                        value={formAtleta.peso} onChange={updateForm}
                    />
                </div>
                <div>
                    <label htmlFor="idPlan" className="form-label">Plan de Entrenamiento</label>
                    <select name="idPlan" onChange={updateForm} id="idPlan" defaultValue="" className="form-select">
                        <option value="" disabled>Selecciona una opción</option>
                        <option value="1">Plan Mensual</option>
                        <option value="2">Plan Trimestral</option>
                        <option value="3">Plan Semestral</option>
                    </select>
                </div>
            </div>

            <div className="mx-auto">
                <button type="submit" className="btn btn-warning">Registrar Atleta</button>
            </div>
        </form>
    </div>
    </>
    )
}
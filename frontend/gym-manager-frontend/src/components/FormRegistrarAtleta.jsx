export function FormRegistrarAtletaMenorEdad({formAtletaMenorEdad, setFormAtletaMenorEdad}) {

    const updateFormResponsable = (event) => {
        setFormAtletaMenorEdad({
            ...formAtletaMenorEdad, 
            formResponsable: {
                ...formAtletaMenorEdad.formResponsable, [event.target.name]: event.target.value
            }
        })
    }
    const updateFormAtleta = (event) => {
        setFormAtletaMenorEdad({
            ...formAtletaMenorEdad,
            formAtleta: {
                ...formAtletaMenorEdad.formAtleta, [event.target.name]: event.target.value
        }})
    }

    return(
    <>
    <div>
        <form onSubmit='' className="d-flex flex-column gap-4 p-2">
            <div className="d-flex flex-column gap-2">
                <h5 className="fs-6 mb-1">Información del Responsable</h5>
                <div className="d-flex gap-4">
                    <div>
                        <label htmlFor="nombre" className="form-label">Nombres</label>
                        <input type="text" name="nombre" id="nombre" className="form-control" 
                            value={formAtletaMenorEdad.formResponsable.nombre} onChange={updateFormResponsable}
                        />
                    </div>
                    <div>
                        <label htmlFor="apellido" className="form-label">Apellidos</label>
                        <input type="text" name="apellido" id="apellido" className="form-control" 
                            value={formAtletaMenorEdad.formResponsable.apellido} onChange={updateFormResponsable}
                        />
                    </div>
                    <div>
                        <label htmlFor="genero" className="form-label">Género</label>
                        <select name="genero" onChange={updateFormResponsable} id="genero" defaultValue="" className="form-select">
                            <option value="" disabled>Seleccionar</option>
                            <option value="1">Masculino</option>
                            <option value="2">Femenino</option>
                        </select>
                    </div>
                </div>

                <div className="d-flex gap-4">
                    <div>
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" name="email" id="correo" className="form-control" 
                            value={formAtletaMenorEdad.formResponsable.email} onChange={updateFormResponsable}
                        />
                    </div>
                    <div>
                        <label htmlFor="dui" className="form-label">DUI</label>
                        <input type="text" name="dui" id="dui" className="form-control" 
                            value={formAtletaMenorEdad.formResponsable.dui} onChange={updateFormResponsable}
                        />
                    </div>
                    <div>
                        <label htmlFor="fechaNacimiento" className="form-label">Fecha de Nacimiento</label>
                        <input type="date" name="fechaNacimiento" id="fechaNacimiento" className="form-control" 
                            value={formAtletaMenorEdad.formResponsable.fechaNacimiento} onChange={updateFormResponsable}
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
                            value={formAtletaMenorEdad.formAtleta.nombre} onChange={updateFormAtleta}
                        />
                    </div>
                    <div>
                        <label htmlFor="apellido" className="form-label">Apellidos</label>
                        <input type="text" name="apellido" id="apellido" className="form-control" 
                            value={formAtletaMenorEdad.formAtleta.apellido} onChange={updateFormAtleta}
                        />
                    </div>
                    <div>
                        <label htmlFor="genero" className="form-label">Género</label>
                        <select name="genero" onChange={updateFormAtleta} id="genero" defaultValue="" className="form-select">
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
                            value={formAtletaMenorEdad.formAtleta.fechaNacimiento} onChange={updateFormAtleta}
                        />
                    </div>
                    <div>
                        <label htmlFor="peso" className="form-label">Peso-Kg</label>
                        <input type="text" name="peso" id="peso" className="form-control" 
                            value={formAtletaMenorEdad.formAtleta.peso} onChange={updateFormAtleta}
                        />
                    </div>
                    <div>
                        <label htmlFor="idPlan" className="form-label">Plan de Entrenamiento</label>
                        <select name="idPlan" onChange={updateFormAtleta} id="idPlan" defaultValue="" className="form-select">
                            <option value="" disabled>Selecciona una opción</option>
                            <option value="1">Plan Mensual</option>
                            <option value="2">Plan Trimestral</option>
                            <option value="3">Plan Semestral</option>
                        </select>
                    </div>
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


export function FormRegistrarAtletaMayorEdad({formAtletaMayorEdad, setFormAtletaMayorEdad}) {

    const updateForm = (event) => {
        setFormAtletaMayorEdad(prevData => ({...prevData, [event.target.name]: event.target.value}));
    }

    return(
    <>
    <div>
        <h5 className="fs-6 mb-3">Formulario de Registro</h5>
        <form onSubmit='' className="d-flex flex-column gap-3">
            <div className="d-flex gap-4">
                <div>
                    <label htmlFor="nombre" className="form-label">Nombres</label>
                    <input type="text" name="nombre" id="nombre" className="form-control" 
                        value={formAtletaMayorEdad.nombre} onChange={updateForm}
                    />
                </div>
                <div>
                    <label htmlFor="apellido" className="form-label">Apellidos</label>
                    <input type="text" name="apellido" id="apellido" className="form-control" 
                        value={formAtletaMayorEdad.apellido} onChange={updateForm}
                    />
                </div>
            </div>

            <div className="d-flex gap-4">
                <div>
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" name="email" id="email" className="form-control" 
                        value={formAtletaMayorEdad.email} onChange={updateForm}
                    />
                </div>
                <div>
                    <label htmlFor="dui" className="form-label">DUI</label>
                    <input type="text" name="dui" id="dui" className="form-control" 
                        value={formAtletaMayorEdad.dui} onChange={updateForm}
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
                        value={formAtletaMayorEdad.fechaNacimiento} onChange={updateForm}
                    />
                </div>
            </div>
            <div className="d-flex gap-4">
                <div>
                    <label htmlFor="peso" className="form-label">Peso-Kg</label>
                    <input type="text" name="peso" id="peso" className="form-control" 
                        value={formAtletaMayorEdad.peso} onChange={updateForm}
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
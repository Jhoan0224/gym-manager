


export function AccesoManualAtleta({formAccesoAtleta, setFormAccesoAtleta}) {


    return(
    <>        
    <form className="px-5 py-1">
        <h5 className="fs-5 mb-4 text-center">Atleta Resgistrado</h5>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email del Atleta</label>
            <input type="email" name="email" id="email" className="form-control" autoComplete="false"
                value={formAccesoAtleta.email}
                onChange={(e) => setFormAccesoAtleta({...formAccesoAtleta, [e.target.name]: e.target.value})}
            />
        </div>
        <div className="mb-4">
            <label htmlFor="tiempoEntreno" className="form-label">Tiempo de Entrenamiento</label>
            <input type="time" name="tiempoEntreno" id="tiempoEntreno" className="form-control"
                value={formAccesoAtleta.tiempoEntreno}
                onChange={(e) => setFormAccesoAtleta({...formAccesoAtleta, [e.target.name]: e.target.value})}
            />
        </div>

        <div className="d-flex">
            <button className="btn btn-primary mx-auto">
                Conceder acceso
            </button>
        </div>
    </form>
    </>
    )
}

export function AccesoManualAtletaNoReg({formAccesoAtletaNoReg, setFormAccesoAtletaNoReg}) {


    return(
    <>
    <form className="px-5 py-1">
        <h5 className="fs-5 mb-4 text-center">Atleta No-Resgistrado</h5>
        <div className="mb-3">
            <label htmlFor="genero" className="form-label">Género</label>
            <select name="genero" id="genero" defaultValue="" className="form-select"
                onChange={(e) => setFormAccesoAtletaNoReg({...formAccesoAtletaNoReg, [e.target.name]: e.target.value})}
            >
                <option value="" disabled>Seleccionar</option>
                <option value="MASCULINO">Masculino</option>
                <option value="FEMENIMO">Femenino</option>
            </select>
        </div>
        <div className="mb-4">
            <label htmlFor="tiempoEntreno" className="form-label">Tiempo de Entrenamiento</label>
            <input type="time" name="tiempoEntreno" id="tiempoEntreno" className="form-control"
                value={formAccesoAtletaNoReg.tiempoEntreno}
                onChange={(e) => setFormAccesoAtletaNoReg({...formAccesoAtletaNoReg, [e.target.name]: e.target.value})}
            />
        </div>
        <div className="d-flex">
            <button className="btn btn-primary mx-auto">Conceder acceso</button>
        </div>
    </form>
    </>
    )
} 
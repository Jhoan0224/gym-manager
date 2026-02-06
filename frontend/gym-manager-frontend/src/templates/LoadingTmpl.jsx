export function LoadingSpiner() {
    return(
    <div className="d-flex flex-column flex-grow-1 justify-content-center align-items-center text-warning">
        <div className="spinner-border m-3" style={{width: '3rem', height: '3rem'}} role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
        <span className="fs-5">Cargando...</span>
    </div>
    )
}
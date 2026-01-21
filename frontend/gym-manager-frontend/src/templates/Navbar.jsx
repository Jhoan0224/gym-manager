import { useNavigate } from "react-router-dom"

export function NavbarAdminLogin() {

    return(
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">

            {/* <a className="navbar-brand" href="#">Logo del gym </a> */}
            <div className="d-flex mx-auto">
                <h5 className="fs-5 mx-auto">THE GYM 365 | Administración </h5>
            </div>
        </div>
    </nav>
    </>
    )
}

export function NavbarUser() {
    const navigate = useNavigate();
    return(
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <div className="d-flex">
                <div>
                    <a className="navbar-brand" href="/">THE GYM</a>
                    <span className="navbar-brand">|</span>
                    <a className="navbar-brand" href="/gym-365/user/home">Mi Perfil</a>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="collapse navbar-collapse d-md-flex justify-content-start justify-content-md-end me-3" id="navbarNav">
                <ul className="navbar-nav d-flex gap-md-3">
                    <li className="nav-item">
                        <a className="nav-link" href="/gym-365/user/suscripcion">Mi Plan de Entrenamiento</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/gym-365/user/diario-de-entrenos">Diario de Entrenamientos</a>
                    </li>
                    <li className="nav-item">
                        <button onClick={() => navigate('/gym-365/user/diario-de-entrenos')} className="nav-link">Notificaciones</button>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/gym-365/user/account">MI Cuenta</a>
                    </li>
                </ul>
            </div>
            <div className="mx-auto my-2">
                <button type="button" className="btn btn-warning">Cerrar Sesion</button>
            </div>
        </div>
    </nav>
    </>
    )
}

export function NavbarWebsite() {

    return(
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand mx-auto mx-md-3" href="#">THE GYM </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-md-flex justify-content-start justify-content-md-end me-3" id="navbarNav">
                <ul className="navbar-nav d-flex gap-3">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Gimnasios</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Equipos del Gym</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">GYM's Blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Tu-GymProfile</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" aria-disabled="true">Nuestra Historia</a>
                        {/* <a className="nav-link" aria-disabled="true">GYM's APP</a> */}
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </>
    )
}


export function NavbarAdmin() {

    return(
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <div className="d-flex">
                <a className="navbar-brand" href="#">THE GYM </a>
                <div className="d-flex text-center">
                    <h5 className="fs-5 my-auto">Modulo de Administracion</h5>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="collapse navbar-collapse d-md-flex justify-content-start justify-content-md-end me-3" id="navbarNav">
                <ul className="navbar-nav d-flex gap-md-3">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Notificaciones</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">My-GymAdmin-Profile</a>
                    </li>
                </ul>
            </div>
            <div className="mx-auto my-2">
                <button type="button" className="btn btn-warning">Cerrar Sesion</button>
            </div>
        </div>
    </nav>
    </>
    )
}
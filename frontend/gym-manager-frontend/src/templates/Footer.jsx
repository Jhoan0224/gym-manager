
export function FooterAdmin() {

    return(
    <>        
    <footer className="bg-body-tertiary">
        <div className="text-center">
            <p>© 2025 THE GYM — Todos los derechos reservados.</p>
        </div>
    </footer>
    </>
    )
}

export function FooterUser() {

    return(
    <>        
    <footer className="mt-3">
        <div className="text-center">
            <h1 className="fs-2">THE GYM</h1>
        </div>
        <div className="row ms-2 ms-md-0 justify-content-md-center gap-3 gap-lg-5 w-100">
            <div className="col-auto d-flex flex-column">
                <h5 className="fs-5">Redes Sociales</h5>
                <div className="d-flex gap-3 justify-content-center my-auto">
                    <i className="bi bi-facebook fs-4"></i>
                    <i className="bi bi-youtube fs-4"></i>
                    <i className="bi bi-instagram fs-4"></i>
                </div>
            </div>
           <div className="col-auto">
                <h5 className="fs-5">The Gym</h5>
                <ul className="">
                    <li className="mb-2"><a href="#">Contactos de negocios</a></li>
                    <li className="mb-2"><a href="#">Preguntas Frecuentes</a></li>
                    <li className="mb-2"><a href="#">Sugerencias y comentarios</a></li>
                </ul>
            </div>
            <div className="col-auto">
                <h5 className="fs-5">The Gym's Company</h5>
                <ul>
                    <li className="mb-2"><a href="#" className="mb-5">Nuestra Historia</a></li>
                    <li className="mb-2"><a href="#">Oprtunidades de Empleo</a></li>
                    <li className="mb-2"><a href="#">Politcas dentro de las instalaciones</a></li>
                </ul>
            </div>
        </div>
        <div className="text-center py-2">
            <p>© 2025 THE GYM — Todos los derechos reservados.</p>
        </div>
    </footer>
    </>
    )
}
import { useNavigate } from "react-router-dom"

export default function HomeAdmin() {
    const navigate = useNavigate();

    return(
    <>
    <div className="row justify-content-center w-100 my-auto">
        <div className="col-auto">
            <div className="border border-success rounded-2 p-2 text-center mb-4" style={{width: '15rem'}}>
                <i className="bi bi-people fs-2"></i>
                <div>
                    <button type="button" onClick={() => navigate('/gym-365/admin/atletas')} className="btn btn-outline-success">Buscar Atletas</button>
                </div>
            </div>

            <div className="border border-success rounded-2 p-2 text-center" style={{width: '15rem'}}>
                <i className="bi bi-chat-text fs-2"></i>
                <div>
                    <a href="/gym-365/admin/contactos" target='_blank' rel="noopener noreferrer"
                        className="btn btn-outline-success">Contactos
                    </a>
                </div>
            </div>   
        </div>
        <div className="col-auto">
            <div className="border border-success rounded-2 p-2 text-center mb-4" style={{width: '15rem'}}>
                <i className="bi bi-list-check fs-2"></i>
                <div>
                    <button className="btn btn-outline-success">Manual de Procedimientos</button>
                </div>
            </div>
            <div className="border border-success rounded-2 p-2 text-center" style={{width: '15rem'}}>
                <i className="bi bi-person-add fs-2"></i>
                <div>
                    <button type="button" onClick={() => navigate('/gym-365/admin/registrar-atleta')} className="btn btn-outline-success">Inscribir Atleta</button>
                </div>
            </div>
        </div>
        <div className="row justify-content-center w-100 my-4">
            <div className="col-auto">
                <div className="border border-warning rounded-2 p-2 text-center" style={{width: '15rem'}}>
                    <i className="bi bi-wallet fs-2"></i>
                    <div>
                        <button type="button" onClick={() => navigate('/gym-365/admin/usuario-pago-suscripcion')} className="btn btn-outline-warning">Pago de Suscripción</button>
                    </div>
                </div>
            </div>
            <div className="col-auto">
                <div className="border border-danger rounded-2 p-2 text-center" style={{width: '15rem'}}>
                    <i className="bi bi-shield-lock fs-2"></i>
                    <div>
                        <button type="button" onClick={() => navigate('/gym-365/admin/acceso-manual')} className="btn btn-outline-danger">Acesso Manual</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}



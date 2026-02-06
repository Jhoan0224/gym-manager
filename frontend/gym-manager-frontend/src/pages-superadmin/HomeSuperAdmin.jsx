import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"


export default function HomeSuperAdmin() {
    const navigate = useNavigate();

    return(
    <>
    <div className="w-100">
        <div className="text-center p-3">
            <h5 className="fs-5">SuperAdministración</h5>
        </div>
        <div className="row justify-content-center w-100 my-auto">
            <div className="col-auto">
                <div className="border border-success rounded-2 p-2 text-center mb-4" style={{width: '15rem'}}>
                    <i className="bi bi-people fs-2"></i>
                    <div>
                        <button type="button" onClick={() => navigate('/gym-365/super-admin/configure-admins')} className="btn btn-outline-success">Configuración de Admins</button>
                    </div>
                </div> 
            </div>
            <div className="col-auto">
                <div className="border border-success rounded-2 p-2 text-center mb-4" style={{width: '15rem'}}>
                    <i className="bi bi-list-check fs-2"></i>
                    <div>
                        <Link to='/gym-365/super-admin/planes-ofertas' className="btn btn-outline-success">Planes y Ofertas</Link>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center w-100">
                <div className="col-auto">
                    <div className="border border-danger rounded-2 p-2 text-center" style={{width: '15rem'}}>
                        <i className="bi bi-shield-lock fs-2"></i>
                        <div>
                            <Link to="/gym-365/super-admin/graphics" className="btn btn-outline-danger">Graficos del Gym</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
    </>
    )
}
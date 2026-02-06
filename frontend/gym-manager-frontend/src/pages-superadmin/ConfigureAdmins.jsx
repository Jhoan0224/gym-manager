import { useState } from "react";
import { FormAddAdmin, PerfilAdminConfig } from "../components/FormAddAdmin";
import { ListaAdmins } from "../components/ListaAdmins";
import { Link, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

export function ConfigureAdmins() {
    const navigate = useNavigate();
    const viewsConfigAdmin = {
        HOME: 1, ADD_ADMIN: 2, CONFIG_ADMIN: 3 
    }
    const [renderView, setRenderView] = useState(viewsConfigAdmin.HOME);
    const [paramsConfig, setParamsConfig] = useState({});

    const RenderConfigAdminw = {
        [viewsConfigAdmin.HOME]:
            <ListaAdmins renderView={renderView} setRenderView={setRenderView} setParamsConfig={setParamsConfig} />,
        [viewsConfigAdmin.ADD_ADMIN]:
            <FormAddAdmin />,
        [viewsConfigAdmin.CONFIG_ADMIN]:
            <PerfilAdminConfig />
    }

        const RenderConfigAdmin = {
            [viewsConfigAdmin.HOME]: "configure-admins",
            [viewsConfigAdmin.ADD_ADMIN]: "add-admin",
        }


    return(
    <>
    <div className="w-100">
        <div className="d-flex my-2">
            <h5 className="fs-5 mx-auto">GYM-365 | <Link to={RenderConfigAdmin[viewsConfigAdmin.HOME]} className="text-decoration-none link-warning">Administradores</Link></h5>
            <button type="button" onClick={() => navigate(RenderConfigAdmin[viewsConfigAdmin.ADD_ADMIN])} className="btn btn-warning">Agregar Admin</button>
        </div>
        <div>    
            <Outlet />
        </div>
    </div>
     </>
    )
}

import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { NavbarWebsite, NavbarUser, NavbarAdmin } from './templates/Navbar'
import { FooterWebsite, FooterUser, FooterAdmin } from './templates/Footer'
import {LoginAdmin, LoginSuperAdmin, LoginUser} from './templates/Login'
import { Contactos } from './templates/Contactos'
import HomeAdmin from './pages-admin/HomeAdmin'
import { AtletasAdmin } from './pages-admin/AtletasAdmin'
import { RegistrarAtleta } from './pages-admin/RegistrarAtleta'
import { PerfilAtletaAdmin } from './pages-admin/PerfilAtleta'
import AccesoManual from './pages-admin/AccesoManual'
import HomeUser from './pages-user/HomeUser'
import CuentaUser from './pages-user/CuentaUser'
import PlanEntrenoUser from './pages-user/PlanEntrenoUser'
import EntrenosUser from './pages-user/EntrenosUser'
import HomeWebsite from './pages-website/HomeWebsite'
import { validarAdminAuthToken, validarSuperAdminAuthToken, validarUserAuthToken } from './api/auth.js'
import { PagoUserLocal } from './components/PagoUserLocal.jsx'
import HomeSuperAdmin from './pages-superadmin/HomeSuperAdmin.jsx'
import { ConfigureAdmins } from './pages-superadmin/ConfigureAdmins.jsx'
import { ListaAdmins } from './components/ListaAdmins.jsx'
import { FormAddAdmin, PerfilAdminConfig } from './components/FormAddAdmin.jsx'
import { PlanesOfertasAdmin } from './pages-superadmin/PlanesOfertasAdmin.jsx'
import { AddOferta, AddPlan, ConfigureOfertaComp, ConfigurePlanComp, ListaPlanes, PlanesOfertasComp } from './components/PlanesOfertasComp.jsx'
import GraphicsGym from './pages-superadmin/GraphicsGym.jsx'
import { LoadingSpiner } from './templates/LoadingTmpl.jsx'


function App() {
  return (
    <>
    <BrowserRouter>
        <Routes path="">
            {/* Website routes */}
            <Route path='/' element={<RenderWebsite />}>
                <Route index element={<HomeWebsite />} />
                <Route path='contactos' element={<Contactos />} />

            </Route>

            {/* Admin routes */}
            <Route path='/gym-365/admin'>
                <Route path='login' element={<LoginAdmin />} />
                <Route element={<RenderAdmin />}>
                    <Route index element={<HomeAdmin />} />
                    <Route path='home' element={<HomeAdmin />} />
                    <Route path='atletas' element={<AtletasAdmin />} />
                    <Route path='contactos' element={<Contactos />} />
                    <Route path='registrar-atleta' element={<RegistrarAtleta />} />
                    <Route path='perfil-atleta' element={<PerfilAtletaAdmin />} />
                    <Route path='acceso-manual' element={<AccesoManual />} />             
                    <Route path='usuario-pago-suscripcion' element={<PagoUserLocal />} />             
                </Route>
            </Route>

            {/* UserAccount routes  */}
            <Route path='/gym-365/user'>
                <Route path='login' element={<LoginUser />} />
                <Route element={<RenderUserAccount />} >
                    <Route index element={<HomeUser />} />
                    <Route path='home' element={<HomeUser />} />
                    <Route path='account' element={<CuentaUser />} />
                    <Route path='diario-de-entrenos' element={<EntrenosUser />} />
                    <Route path='suscripcion' element={<PlanEntrenoUser />} />
                </Route>
            </Route>


            <Route path='gym-365/super-admin/login' element={<LoginSuperAdmin />}/>

            <Route path='gym-365/super-admin' element={<RenderSuperAdmin />}>
                
                <Route index element={<HomeSuperAdmin />} />
                <Route path='home' element={<HomeSuperAdmin />} />

                <Route path='configure-admins' element={<ConfigureAdmins /> }>
                    <Route index element={<ListaAdmins />} />
                    <Route path='lista-admins' element={<ListaAdmins />} />
                    <Route path='add-admin' element={<FormAddAdmin />} />
                    <Route path='cuenta-admin/:idAdmin' element={<PerfilAdminConfig />} />
                </Route>
                <Route path='planes-ofertas' element={<PlanesOfertasAdmin />}>
                    <Route index element={<PlanesOfertasComp />}/>
                    <Route path='add-plan' element={<AddPlan />} />
                    <Route path='add-oferta' element={<AddOferta />} />
                    <Route path='config-plan/:idPlan' element={<ConfigurePlanComp />} />
                    <Route path='config-oferta/:idOferta' element={<ConfigureOfertaComp />} />
                    </Route>
                <Route path='graphics' element={<GraphicsGym />} />

            </Route>

            <Route path='/spiner' element={<LoadingSpiner />} />

        </Routes>    
    </BrowserRouter>
    </>
  )
}



function RenderWebsite() {
    return(
    <>
        <NavbarWebsite />
        <div className='d-flex flex-grow-1 container py-2'>
            <Outlet />
        </div>
        <FooterWebsite/>
    </>
    )
}

function RenderSuperAdmin() {
    const [authIsValid, setAuthIsValid] = useState(null);
    
    useEffect(() => {
        const checkAuth = async () => {
            const checkResult = await validarSuperAdminAuthToken();
            setAuthIsValid(checkResult.success);
            if (!checkResult.success) {
                alert(checkResult.message);
            };
        };
        checkAuth();
    },[]);

    if (authIsValid === null) {
        return <LoadingSpiner /> 
    }
    if (authIsValid === true) {
        return(
        <>
            <NavbarAdmin />
            <div className='d-flex flex-grow-1 container py-2'>
                <Outlet />
            </div>
            <FooterAdmin />
        </>
        )
    } else {
        return <LoginSuperAdmin />   
    }
} 

function RenderUserAccount() {
    const [authIsValid, setAuthIsValid] = useState(null);
    
    useEffect(() => {
        const checkAuth = async () => {
            const checkResult = await validarUserAuthToken();
            setAuthIsValid(checkResult.success);

            if (checkResult.success === false) {
                alert(checkResult.message);
            }
        };
        checkAuth();
    },[]);

    if (authIsValid === null) {
        return <div className="spinner-border text-warning" role="status"> <span className="visually-hidden">Cargando...</span> </div>
    }
    if (authIsValid === true) {
        return(
        <>
            <NavbarUser />
            <div className='d-flex flex-grow-1 container py-2'>
                <Outlet />
            </div>
            <FooterUser />
        </>
        )
    } else {
        return <LoginUser />   
    }
}

function RenderAdmin() {
    const [authIsValid, setAuthIsValid] = useState(null);
    
    useEffect(() => {
        const checkAuth = async () => {
            const checkResult = await validarAdminAuthToken();
            setAuthIsValid(checkResult.success);

            if (!checkResult.success) {
                alert(checkResult.message);
            };
        };
        checkAuth();
    },[]);

    if (authIsValid === null) {
        return <div className="spinner-border text-warning" role="status">
                <span className="visually-hidden">Cargando...</span>
                </div>
    }
    if (authIsValid === true) {
        return(
        <>
            <NavbarAdmin />
            <div className='d-flex flex-grow-1 container py-2'>
                <Outlet />
            </div>
            <FooterAdmin />
        </>
        )
    } else {
        return <LoginAdmin />   
    }
} 

export default App
import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { NavbarWebsite, NavbarUser, NavbarAdmin } from './templates/Navbar'
import { FooterWebsite, FooterUser, FooterAdmin } from './templates/Footer'
import {LoginAdmin, LoginUser} from './templates/Login'
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
import { validarAdminAuthToken, validarUserAuthToken } from './api/auth.js'


function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            {/* Website routes */}
            <Route path='/' element={<RenderWebsite />}>
                <Route index element={<HomeWebsite />} />
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
        </Routes>    
    </BrowserRouter>
    </>
  )
}

async function validateAuth() {
     return true;
    const tokenAuth = localStorage.getItem(import.meta.env.VITE_NAME_TOKEN_AUTH);
    
    if (tokenAuth === undefined || tokenAuth === null || tokenAuth === '') {
        return false;
    }
    const tokenIsValid = await validarAdminAuthToken();
    if (tokenIsValid.success === true) {
        return true;
    } else {
        alert(tokenIsValid.message)
        return false;
    }
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

function RenderUserAccount() {
    const [authIsValid, setAuthIsValid] = useState(null);
    
    useEffect(() => {
        const checkAuth = async () => {
            const checkResult = await validarUserAuthToken();
            console.log("DEBUG CHECK TOKEN USER >> ", checkResult)
            checkResult.success === true ? setAuthIsValid(true) : setAuthIsValid(false), alert(checkResult.message);
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
            const result = await validateAuth();
            setAuthIsValid(result);
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
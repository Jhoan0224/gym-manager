import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom'
import Login from './templates/Login'
import { NavbarUser, NavbarAdmin } from './templates/Navbar'
import HomeAdmin from './pages-admin/HomeAdmin'
import { FooterUser, FooterAdmin } from './templates/Footer'
import { AtletasAdmin } from './pages-admin/AtletasAdmin'
import { Contactos } from './templates/Contactos'
import { RegistrarAtleta } from './components/RegistrarAtleta'




function App() {

  return (
    <>
    <BrowserRouter>
        <Routes >
            {/* admin routes */}
            <Route path='/gym-admin/' element={RenderAdmin()}>

                <Route path='login' element={<Login />} />
                <Route path='home' element={<HomeAdmin />} />
                <Route path='atletas' element={<AtletasAdmin />} />
                <Route path='contactos' element={<Contactos />} />
                <Route path='registrar-atleta' element={<RegistrarAtleta />} />
            </Route>




        </Routes>    
    </BrowserRouter>
    </>
  )
}

function RenderAdmin(){

    return(
    <>
        <NavbarAdmin />
        <div className='d-flex flex-grow-1 container py-2'>
            <Outlet/>
        </div>
        <FooterAdmin />
    </>
    )
} 

export default App

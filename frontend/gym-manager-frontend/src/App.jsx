import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom'
import { useState } from 'react'
import Login from './templates/Login'

function App() {



  return (
    <>
    <BrowserRouter>
        <Routes >
            {/* admin routes */}
            <Route path='/gym-admin/' element={RenderAdmin()}>

                <Route path='login' element={<Login />} />
            </Route>




        </Routes>    
    </BrowserRouter>
    </>
  )
}

function RenderAdmin(){

    return(
    <>
        <Outlet/>
    </>
    )
} 

export default App

import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { getAdminAuth, getUserAuth } from "../api/auth.js";
import { NavbarAdminLogin } from "./Navbar";
import { FooterAdmin } from "./Footer";


export function LoginAdmin(){
    const navigate = useNavigate();
    const [formLoginAdmin, setFormLoginAdmin] = useState({
        email: "",
        pass: ""
    })

    const upFormLoginAdmin = (event) => {
        setFormLoginAdmin(({...formLoginAdmin, [event.target.name]: event.target.value}));
    }

    const sendLogin = async (event) => {
        event.preventDefault();
        // llamar al servicio de login en la API
        const authResult = await getAdminAuth(formLoginAdmin);

        if (authResult.success === true) {
            navigate('/gym-365/admin/home');
        } else {
            alert('Auth Message'+ authResult.message);
        }
    }

    return(
    <>
    <NavbarAdminLogin />
    <div className="d-flex flex-grow-1 justify-content-center align-items-center w-100">

        <form onSubmit={(event) =>sendLogin(event)} className="border rounded p-4">
            <div className="mb-4">
                <h2 className="text-center fs-3">Gym Manager</h2>
                <h3 className="fs-4">Administración Panel de Acceso</h3>

            </div>
            <div className="mb-2">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" name="email" className="form-control" id="username"
                    value={formLoginAdmin.username}
                    onChange={upFormLoginAdmin}
                />
            </div>
            <div className="mb-2">
                <label htmlFor="passAdmin" className="form-label">Contraseña</label>
                <input type="password" name="pass" className="form-control" id="passAdmin"
                    value={formLoginAdmin.pass}
                    onChange={upFormLoginAdmin}
                />
            </div>
            <div className="d-flex justify-content-center p-3">
                <button type="submit" className="btn btn-primary">Acceder</button>
            </div>
        </form>
    </div>
    <FooterAdmin />
    </>
    )
}

export function LoginUser(){
    const navigate = useNavigate();
    const [formLoginAdmin, setFormLoginAdmin] = useState({
        email: "",
        pass: ""
    })

    const upFormLoginAdmin = (event) => {
        setFormLoginAdmin(({...formLoginAdmin, [event.target.name]: event.target.value}));
    }

    const sendLogin = async (event) => {
        event.preventDefault();
        try {
            const authResult = await getUserAuth(formLoginAdmin);
            alert(authResult.message);
            if (authResult.validAuth === true) {
                navigate('/gym-admin/home');
            }

        } catch (error) {
            console.log('Error login admin', error)
        }
    }

    return(
    <>
    <NavbarAdminLogin />
    <div className="d-flex flex-grow-1 justify-content-center align-items-center w-100">

        <form onSubmit={(event) =>sendLogin(event)} className="border rounded p-4">
            <div className="mb-4">
                <h2 className="text-center fs-3">Gym Manager</h2>
                <h3 className="fs-4">Administración Panel de Acceso</h3>

            </div>
            <div className="mb-2">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" name="email" className="form-control" id="username"
                    value={formLoginAdmin.username}
                    onChange={upFormLoginAdmin}
                />
            </div>
            <div className="mb-2">
                <label htmlFor="passAdmin" className="form-label">Contraseña</label>
                <input type="password" name="pass" className="form-control" id="passAdmin"
                    value={formLoginAdmin.pass}
                    onChange={upFormLoginAdmin}
                />
            </div>
            <div className="d-flex justify-content-center p-3">
                <button type="submit" className="btn btn-primary">Acceder</button>
            </div>
        </form>
    </div>
    <FooterAdmin />
    </>
    )
}
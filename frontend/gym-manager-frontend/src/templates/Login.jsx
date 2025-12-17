import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Login(){
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
            // const response = await axios.post();
            // alert(response.data);
            navigate('/gym-admin/home');
        } catch (error) {
            console.log('error login admin', error)
        }
    }

    return(
    <>
    <div className="d-flex justify-content-center align-items-center w-100 ">

        <form onSubmit={(event) =>sendLogin(event)} className="border rounded p-4">
            <div className="mb-4">
                <h2 className="text-center fs-2">Gym Manager</h2>
                <h3 className="fs-3">Administración Panel de Acceso</h3>

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
    </>
    )
}
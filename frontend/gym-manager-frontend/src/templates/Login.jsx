import { useState } from "react"


export default function Login(){
    const [formLoginAdmin, setFormLoginAdmin] = useState({
        username: "",
        pass: ""
    })

    const upFormLoginAdmin = (event) => {
        setFormLoginAdmin(({...formLoginAdmin, [event.target.name]: event.target.value}));
    }

    return(
    <>
    <div className="d-flex justify-content-center align-items-center w-100 ">

        <form onSubmit="" className="">
            <h2>Gym Manager, Administracion<br />Panel de Acceso</h2>
            <div>
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" id="username"
                    value={formLoginAdmin.username}
                    onChange={upFormLoginAdmin}
                />
            </div>
            <div>
                <label htmlFor="passAdmin" className="form-label">Contraseña</label>
                <input type="password" className="form-control" id="passAdmin"
                    value={formLoginAdmin.pass}
                    onChange={upFormLoginAdmin}
                />
            </div>
        </form>
    </div>
    </>
    )
}
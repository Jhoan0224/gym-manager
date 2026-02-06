import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getListaAdmins } from "../api/super-admin";

export function ListaAdmins() {

    const [listaAdmin, setListaAdmin] = useState([
        {id_admin: 1, nombre: 'Juan Peres', email: 'juan@gym.com', telefono: '6725-8781'},
        {id_admin: 2, nombre: 'Marcos Pineda', email: 'marcos@gym.com', telefono: '7845-3200'},
        {id_admin: 3, nombre: 'Kevin Rodriguez', email: 'kevin@gym.com', telefono: '7251-8544'}
    ]);

    useEffect(()=> {
        const getAdmins = async () => {
            const data = await getListaAdmins();
            if(data.success) {
                setListaAdmin(data.listaAdmins);
            }
        };
        getAdmins();
    }, []);

    return(
    <>
    <table className="table table-striped table-hover">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombres</th>
                <th>Email</th>
                <th>Telefono</th>
                <th>Opciones</th>
            </tr>
        </thead>
        <tbody>
            {listaAdmin.map(admin => (
                <tr key={admin.id_admin}>
                    <td>{admin.id_admin}</td>
                    <td>{admin.nombre}</td>
                    <td>{admin.email}</td>
                    <td>{admin.telefono}</td>
                    <td>
                        <Link to={`cuenta-admin/${admin.id_admin}`} className="btn btn-primary">Configuracion
                        </Link>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
    </>
    )
}
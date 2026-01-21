

 export function ListaAtletas({listaAtletas, getPerfilUsuario}){

    return(
    <>
    <div className="w-100">
        <h5 className="fs-6">Atletas Encontrados:</h5>
        <table className="table table-hover table-striped mx-4">
            <thead className="">
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Correo</th>
                    <th>Plan Seleccionado</th>
                    <th>Atleta-Perfil</th>
                </tr>
            </thead>
            <tbody>
                {listaAtletas.map(atleta => (
                    <tr key={atleta.id_usuario}>
                        <td>{atleta.id_usuario}</td>
                        <td>{atleta.nombre}</td>
                        <td>{atleta.apellido}</td>
                        <td>{atleta.email}</td>
                        <td>{atleta.id_plan}</td>
                        <td>
                            <button type="button" onClick={() => getPerfilUsuario(atleta.id_usuario)} className="btn btn-primary">
                                Ver Perfil
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

    </div>
    </>
    )
}

const listaAtletas2 = [
  {
    "id": 1,
    "nombre": "Carlos",
    "apellido": "Mendoza",
    "correo": "c.mendoza@email.com",
    "plan_seleccionado": "God Mode"
  },
  {
    "id": 2,
    "nombre": "Valeria",
    "apellido": "Ríos",
    "correo": "val.rios@email.com",
    "plan_seleccionado": "Glow Up"
  },
  {
    "id": 3,
    "nombre": "Sebastián",
    "apellido": "Ortiz",
    "correo": "sebastian.fit@email.com",
    "plan_seleccionado": "The Hustle"
  }
]

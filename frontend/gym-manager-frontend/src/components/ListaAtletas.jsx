
 export function ListaAtletas({listaAtletas}){

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
                    <th className="text-center">Atleta-Perfil</th>
                </tr>
            </thead>
            <tbody>
                {listaAtletas.map(atleta => (
                    <tr key={atleta.id}>
                        <td>{atleta.id}</td>
                        <td>{atleta.nombre}</td>
                        <td>{atleta.apellido}</td>
                        <td>{atleta.correo}</td>
                        <td>{atleta.plan_seleccionado}</td>
                        <td className="text-center"><button className="btn btn-primary">Ver Perfil</button></td>
                    </tr>
                ))}
            </tbody>
        </table>

    </div>
    </>
    )
}

const listaAtletas = [
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
  },
  {
    "id": 4,
    "nombre": "Camila",
    "apellido": "Vega",
    "correo": "camivega@email.com",
    "plan_seleccionado": "Titanio"
  },
  {
    "id": 5,
    "nombre": "Julián",
    "apellido": "Castro",
    "correo": "j.castro99@email.com",
    "plan_seleccionado": "All-In Access"
  }
]

import { useState } from "react";

export default function EntrenosUser() {

    const [historial, setHistorial] = useState([
    {
        "id": 1,
        "fechaEntreno": "2026-01-02",
        "tiempoEntrenado": "1h 15min",
        "musculosEntrenados": "Pecho y Tríceps"
    },
    {
        "id": 2,
        "fechaEntreno": "2026-01-03",
        "tiempoEntrenado": "DESCANSO",
        "musculosEntrenados": "Dia de recuperacion"
    },
    {
        "id": 3,
        "fechaEntreno": "2026-01-05",
        "tiempoEntrenado": "1h 30min",
        "musculosEntrenados": "Tren Inferior (Pierna completa)"
    },
    {
        "id": 4,
        "fechaEntreno": "2026-01-06",
        "tiempoEntrenado": "1h 05min",
        "musculosEntrenados": "Hombro y Abdomen"
    },
    {
        "id": 5,
        "fechaEntreno": "2026-01-08",
        "tiempoEntrenado": "55min",
        "musculosEntrenados": "Full Body (Cuerpo completo)"
    }
    ]
    );

    return(
    <>
    <div className="w-100">
        <div className="text-center mx-auto w-75 my-3">
            <h5 className="fs-4">Mi Diario de Entrenamientos</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia corrupti eaque iure nam commodi, itaque molestiae, neque quibusdam atque minima repellendus, quidem mollitia. Aliquid inventore at fugiat quos laborum omnis.</p>
        </div>

        <h5 className="fs-5">Mi Legado de Entrenamiento</h5>
        <div className="p-3">
            <table className="table table-striped table-hover border">
                <thead>
                    <tr>
                        <th>Fecha de Entreno</th>
                        <th>Tiempo Entrenado</th>
                        <th className="text-warning">Musculos Entrenados</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {historial.map(pago => (
                        <tr key={pago.id}>
                            <td>{pago.fechaEntreno}</td>
                            <td>{pago.tiempoEntrenado}</td>
                            <td className="text-warning-emphasis">{pago.musculosEntrenados}</td>
                            <td><button className="btn btn-info">Ver detalles</button></td>
                        </tr>              
                    ))}
                </tbody>
            </table>
        </div>  
    </div>
    </>
    )
}
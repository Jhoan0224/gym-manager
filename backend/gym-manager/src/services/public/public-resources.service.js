import { mysqlPoolConnect } from "../../config/database/db-connect.js";
import * as publicQueries from '../../repositories/gym-public.queries.js' 

export async function listaPlanes() {
    const RESULT_PROCESS = {
        success: false,
        message: 'No se han encontrado resultados',
        listaPlanes: []
    }
    const conn = await mysqlPoolConnect.getConnection();   
    try {
        const [resultPlanes] = await conn.execute(publicQueries.GET_LISTA_PLANES);

        if (resultPlanes.length === 0) {
            return RESULT_PROCESS;
        }
        // si todo sale OK
        RESULT_PROCESS.success = true;
        RESULT_PROCESS.message = 'Planes disponibles que ha sido recuperados';
        RESULT_PROCESS.listaPlanes = resultPlanes;

        return RESULT_PROCESS;

    } catch (error) {throw error;} 
    finally { conn?.release();}
}

export async function listaOfertas() {
    const RESULT_PROCESS = {
        success: false,
        message: 'No se han encontrado resultados',
        listaOfertas: []
    }
    const conn = await mysqlPoolConnect.getConnection();   
    try {
        const [resultOfertas] = await conn.execute(publicQueries.GET_LISTA_OFERTAS);

        if (resultOfertas.length === 0) {
            return RESULT_PROCESS;
        }
        // si todo sale OK
        RESULT_PROCESS.success = true;
        RESULT_PROCESS.message = 'Ofertas disponibles que ha sido recuperadas';
        RESULT_PROCESS.listaOfertas = resultOfertas;

        return RESULT_PROCESS;

    } catch (error) {throw error;} 
    finally { conn?.release();}
} 
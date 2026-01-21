import { mysqlPoolConnect } from "../config/database/db-connect.js";
import * as userQueries from '../repositories/usuario-account.queries.js' 

export async function checkResponsableExist(emailCheck, duiCheck) {
    const conn = await mysqlPoolConnect.getConnection();
    try {        
        const [result] = await conn.execute(userQueries.FIND_USER_RESPONSABLE_EMAIL_DUI, [emailCheck, duiCheck]);

        /* Si la logitud del resultado obtenido en la consulta es mayor a Cero,
        * signifca que el Email ya esta en use y no es valido
        */
        return result.length === 0 ? true : false;

    } catch (error) { throw error}
    finally { conn?.release(); }
}

export async function checkEmailAvailability(emailCheck) {
    const conn = await mysqlPoolConnect.getConnection();
    try {        
        const [result] = await conn.execute(userQueries.FIND_USER_EMAIL, [emailCheck]);

        /* Si la logitud del resultado obtenido en la consulta es mayor a Cero,
        * signifca que el Email ya esta en use y no es valido
        */
        return result.length === 0 ? true : false;

    } catch (error) { throw error}
    finally { conn?.release(); }
} 

export async function checkDuiIsUnique(duiCheck) {
    const conn = await mysqlPoolConnect.getConnection();
    try {        
        const [result] = await conn.execute(userQueries.FIND_USER_DUI, [duiCheck]);

        /* Si la logitud del resultado obtenido en la consulta es mayor a Cero,
        * signifca que el DUI ya esta en uso y no es valido
        */
        return result.length === 0 ? true : false;

    } catch (error) { throw error}
    finally { conn?.release(); }
} 
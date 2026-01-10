import { mysqlPoolConnect } from "../../config/database/db-connect.js";
import * as userQueries from '../../repositories/usuario-account.queries.js';

export async function getPerfiAtleta(idUsuarioSolicitado) {
    const RESULT_PROCESS = {
        success: false,
        perfilUsuario: {}
    }
    const conn = await mysqlPoolConnect.getConnection();
    try {
        const result = await conn.execute( userQueries.GET_PERFIL_USUARIO,[idUsuarioSolicitado]);
        const perfilUsuario = result[0] ?? null;
        
        if (perfilUsuario === null) {
            return RESULT_PROCESS;
        } else {
            RESULT_PROCESS.success = true;
            RESULT_PROCESS.perfilUsuario = perfilUsuario;
            return RESULT_PROCESS;  
        }
    } catch (error) {
        throw error;
    } finally { conn?.release(); }
}
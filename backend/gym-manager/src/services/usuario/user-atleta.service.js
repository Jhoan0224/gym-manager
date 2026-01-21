import { mysqlPoolConnect } from "../../config/database/db-connect.js";
import * as userQueries from '../../repositories/usuario-account.queries.js';

export async function svcUpdateUserData(idUsuarioSolicitado) {
    const RESULT_PROCESS = {
        success: false,
        message: 'No fue posible actualizar la Informacion',
        infoActualizada: {}
    }
    const conn = await mysqlPoolConnect.getConnection();
    try {
        // obtener lista de entrenos del id usuario solicitado
        const [infoActualizada] = await conn.execute(userQueries.GET_LISTA_ENTRENOS_USER, [formData]);

        // verificar que se hayan obtenido resultados
        if (usuarioInfo.length === 0) {
            return RESULT_PROCESS;
        }
        // Si todo salio bien construimos el mensage al cliete
        RESULT_PROCESS.success = true;
        RESULT_PROCESS.message = 'Se actualizo correctamente la Informacion';
        RESULT_PROCESS.infoActualizada = infoActualizada;
        
        return RESULT_PROCESS;

    } catch (error) { throw error; } finally { conn?.release(); }
}

export async function svcListaEntrenosUser(idUsuarioSolicitado) {
    const RESULT_PROCESS = {
        success: false,
        message: 'Informacion no encontrada',
        listaEntrenos: []
    }
    const conn = await mysqlPoolConnect.getConnection();
    try {
        // obtener lista de entrenos del id usuario solicitado
        const [listaEntrenos] = await conn.execute(userQueries.GET_LISTA_ENTRENOS_USER,[idUsuarioSolicitado]);

        // verificar que se hayan obtenido resultados
        if (usuarioInfo.length === 0) {
            return RESULT_PROCESS;
        }
        // Si todo salio bien construimos el mensage al cliete
        RESULT_PROCESS.success = true;
        RESULT_PROCESS.message = 'Informacion encontrada';
        RESULT_PROCESS.listaEntrenos = listaEntrenos;
        
        return RESULT_PROCESS;

    } catch (error) { throw error; } finally { conn?.release(); }
}

export async function svcSuscripcionUserInfo(idUsuarioSolicitado) {
    const RESULT_PROCESS = {
        success: false,
        message: 'Informacion no encontrada',
        usuarioInfo: {},
        suscripcionInfo: {},
        suscripcionPagos: [],
    }
    const conn = await mysqlPoolConnect.getConnection();
    try {
        // obtener infomacion del usuario
        const [usuarioInfo] = await conn.execute( userQueries.GET_MAIN_USER_INFO,[idUsuarioSolicitado]);

        // verificar que se hayan obtenido resultados
        if (usuarioInfo.length === 0) {
            return RESULT_PROCESS;
        }
        console.log('DEBUG BREAK POINT 1 >> ', usuarioInfo);
        // continuar. obtenter info de la suscripcion basado en el id_usuario solicitado
        const [suscripcionInfo] = await conn.execute(userQueries.GET_SUSCRIPCION_USER_INFO, [usuarioInfo[0].id_usuario]);
        // verificar que se haya recuperado la informacion
        console.log('DEBUG BREAK POINT 2 >> ', suscripcionInfo);
        if (suscripcionInfo.length === 0) {
            return RESULT_PROCESS;
        }

        const [suscripcionPagos] = await conn.execute(userQueries.GET_USER_SUSCRIPCION_PAGOS, [suscripcionInfo[0].id_suscripcion_usuario]);
        
        console.log('DEBUG BREAK POINT 3 >> ', suscripcionPagos);
        // Validamos siempre
        if(suscripcionPagos == null) { return RESULT_PROCESS}

        // Si todo salio bien construimos el mensagge al cliete
        RESULT_PROCESS.success = true;
        RESULT_PROCESS.message = 'La Informacion ha sido encotrada';
        RESULT_PROCESS.usuarioInfo = usuarioInfo[0]; // retorna objeto
        RESULT_PROCESS.suscripcionInfo = suscripcionInfo[0]; // retorna objeto
        RESULT_PROCESS.suscripcionPagos = suscripcionPagos; // retorna una lista de objetos

        return RESULT_PROCESS;

    } catch (error) { throw error; } finally { conn?.release(); }
}

export async function getPerfiAtleta(idUsuarioSolicitado) {
    const RESULT_PROCESS = {
        success: false,
        message: 'Usuario no encontrado',
        perfilUsuario: {}
    }
    const conn = await mysqlPoolConnect.getConnection();
    try {
        const [perfilUsuario] = await conn.execute( userQueries.GET_PERFIL_USUARIO,[idUsuarioSolicitado]);

        if (perfilUsuario.length === 0) {
            return RESULT_PROCESS;
        }           
        RESULT_PROCESS.success = true;
        RESULT_PROCESS.message = 'Informacion encontrada';
        RESULT_PROCESS.perfilUsuario = perfilUsuario[0];
        return RESULT_PROCESS;
    } catch (error) {
        throw error;
    } finally { conn?.release(); }
}
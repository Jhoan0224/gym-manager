import { mysqlPoolConnect } from "../../config/database/db-connect.js"
import * as inserFormat from '../../utils/insert-formats-db.js'
import * as queriesAdminUser from '../../repositories/admin-usuario.queries.js'
import * as queriesUser from '../../repositories/usuario-account.queries.js'

export async function getPefilUserById(idUsuario) {
    const RESULT_PROCESS = {
        message: 'Perfil del Usuario obtenido',
        data: {
            idUsuarioSolicitado: idUsuario,
            perfilUsuario: {}
        }
    }
    const conn = await mysqlPoolConnect.getConnection();
    try {
        const [result] = await conn.execute(queriesUser.GET_PERFIL_USUARIO, [idUsuario]);
        // verficar que si exista
        const perfilUsuario = result[0] ?? null;

        if (perfilUsuario !== null) {
            RESULT_PROCESS.data.perfilUsuario = perfilUsuario;
            
            return RESULT_PROCESS;
        } else {
            return RESULT_PROCESS;
        }  
            
    } catch (error) {
        throw error;
    } finally {
        if (conn) {conn.release()}
    }
}

export async function addUserAtleta(formUsuarioAtleta) {
    const RESULT_PROCESS = {
        message: 'El nuevo atleta se registro con exito',
        data: {idUsuario: ''}
    }
    const conn = await mysqlPoolConnect.getConnection();
    try {
        const values = Object.values(inserFormat.usuarioAtleta(formUsuarioAtleta));
        const [result] = await conn.execute(queriesAdminUser.ADD_USUARIO_ATLETA, values);
        const idInsert = result?.insertId ?? null;

        if (idInsert !== null) {
            RESULT_PROCESS.data.idUsuario = idInsert;
            return RESULT_PROCESS;
        } else {
            return null;
        }
    } catch (error) {
        throw error;
    } finally {
        if (conn) conn.release();
    }
}

export async function addUserResponsable(formUsuarioAtleta) {
    const conn = await mysqlPoolConnect.getConnection();
    const RESULT_PROCESS = {
        message: 'El usuario responsable se registro con exito',
        data: {idUsuario: ''}
    }
    try {
        const values = Object.values(inserFormat.usuarioResponsable(formUsuarioAtleta));
        const [result] = await conn.execute(queriesAdminUser.ADD_USUARIO_RESPONSABLE, values);

        // puede retornar el id de registro insertado o retornal null si fallo
        if (result?.insertId != null) {
            RESULT_PROCESS.data.idUsuario = idInsert;
            return RESULT_PROCESS;
        }
        return null;

    } catch (error) {
        throw error;
    } finally {
        conn?.release();
    }
}

export async function addAtletaJunior(formAtletaJunior, idResponsable) {
    const RESULT_PROCESS = {
        message: 'El usuario atleta junior se registro con exito',
        data: {idUsuario: ''}
    }
    const conn = await mysqlPoolConnect.getConnection();
    try {
        // formateamos los valores y los convertimos en un array
        const valuesAtletaJunior = Object.values(inserFormat.usuarioAtletaJunior(formAtletaJunior));
        // iniciamos la transaccion de insercion en multiples tablas
        await conn.beginTransaction();
        // registramos el usuario atleta junior
        const [result] = await conn.execute(queriesAdminUser.ADD_USUARIO_ATLETA_JUNIOR, valuesAtletaJunior);
        // obtenemos el id del registro
        const idAtletaJrAdded =  result?.insertId ?? null;

        // verificamos que haya sido resgitrado
        if (idAtletaJrAdded !== null) {
            // registamos al responsable con el atleta junior
            const [result] = await conn.execute(queriesAdminUser.Add_RELACION_RESPONSABLE_ATLETAJR, [idResponsable, idAtletaJrAdded]);
            // validamos que se registraron correctamente
            const idRelacionAdded = result?.insertId ?? null;

            if(idRelacionAdded !== null) {
                // si todos los registros anteriosres fueron exitoso hacemos un commit de la transanccion
                await conn.commit();
                
                // finalmente construimos el mensaje de exito
                // agregamos el Id del usuario atleta junior registrado
                RESULT_PROCESS.data.idUsuario = idAtletaJrAdded;
                
                return RESULT_PROCESS;
            } else {
                // si el segundo registro de fallo entonces hacemos un Rollback de la transaccion
                await conn.rollback();
                // y devolvemos null
                return null;
            }

        } else {
            // en caso de que el primer registro falle tambien hacemos un rollback de la transaccion
            await conn.rollback();
            // y tambien devolvemos null
            return null;
        }

    } catch (error) {
        // Si ocurre un error tambien hacemos un Rollback de todo;
        await conn.rollback();
        // lanzamos un error para el try-catch del nivel superior
        throw error;
    } finally {
        // si la trasaccion fue exitosa o no siempre liberamos la connecion
        if (conn) conn.release();
    }
}
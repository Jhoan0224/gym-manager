import { mysqlPoolConnect } from "../../config/database/db-connect.js"
import * as adminUserSubSvc from '../../subservices/admin-usuarios.subservices.js'
import * as inserFormat from '../../utils/insert-formats-db.js'
import * as queriesAdminUser from '../../repositories/admin-usuario.queries.js'
import * as queriesUser from '../../repositories/usuario-account.queries.js'


export async function findUsuarioById(idUsuario) {
    const RESULT_PROCESS = {
        success: false,
        message: 'Usuario no encontrado',
        data: []
    }
    const conn = await mysqlPoolConnect.getConnection();
    try {
        const [result] = await conn.execute(queriesAdminUser.FIND_USUARIO_BY_ID, [idUsuario]);
        
        // verficar que si exista
        if (result.length === 0) {
            return RESULT_PROCESS;
        } else {
            RESULT_PROCESS.success = true;
            RESULT_PROCESS.message = 'Usuario encontrado';            
            RESULT_PROCESS.data = result;
            return RESULT_PROCESS;
        }
    } catch (error) {
        throw error;
    } finally {
        if (conn) {conn.release()}
    }
}

export async function findUsuarioByEmail(emailUsuario) {
    const RESULT_PROCESS = {
        success: false,
        message: 'Usuario no encontrado',
        data: []
    }
    const conn = await mysqlPoolConnect.getConnection();
    try {
        const [result] = await conn.execute(queriesAdminUser.FIND_USUARIO_BY_EMAIL, [emailUsuario]);
        
        // verficar que si exista
        if (result.length === 0) {
            return RESULT_PROCESS;
        } else {
            RESULT_PROCESS.success = true;
            RESULT_PROCESS.message = 'Usuario encontrado';            
            RESULT_PROCESS.data = result;
            return RESULT_PROCESS;
        }
    } catch (error) {
        throw error;
    } finally {
        if (conn) {conn.release()}
    }
}

export async function findUsuarioByNames(nombre, apellido) {
    const RESULT_PROCESS = {
        success: false,
        message: 'Usuarios no encontrados',
        data: []
    }
    const conn = await mysqlPoolConnect.getConnection();
    try {
        const [result] = await conn.execute(queriesAdminUser.FIND_USUARIO_BY_NAMES, [nombre, apellido]);

        // verficar que si exista
        if (result.length === 0) {
            return RESULT_PROCESS;
        } else {
            RESULT_PROCESS.success = true;
            RESULT_PROCESS.message = 'Usuarios encontrados';            
            RESULT_PROCESS.data = result;
            return RESULT_PROCESS;
        }
    } catch (error) {
        throw error;
    } finally {
        if (conn) {conn.release()}
    }
}

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
        success: false,
        message: 'No se completo el registro del nuevo atleta',
        data: {idUsuario: ''}
    }
    const conn = await mysqlPoolConnect.getConnection();
    try {
        // primero verficar que el Email y DUI no este en uso
        const emailIsAvailable = await adminUserSubSvc.checkEmailAvailability(formUsuarioAtleta.email);
        if (emailIsAvailable === false) {
            RESULT_PROCESS.message = 'El Email no esta disponible';
            return RESULT_PROCESS
        }
        const duiIsUnique = await adminUserSubSvc.checkDuiIsUnique(formUsuarioAtleta.dui);
        if (duiIsUnique === false) {
            RESULT_PROCESS.message = 'El DUI no esta disponible';
            return RESULT_PROCESS
        }

        const values = Object.values(inserFormat.usuarioAtleta(formUsuarioAtleta));
        const [result] = await conn.execute(queriesAdminUser.ADD_USUARIO_ATLETA, values);
        const idInsert = result?.insertId ?? null;

        if (idInsert === null) {
            RESULT_PROCESS.success = true;
            RESULT_PROCESS.message = 'El nuevo atleta se registro con exito';
            RESULT_PROCESS.data.idUsuario = idInsert;
            return RESULT_PROCESS;
        } else {
            return RESULT_PROCESS;
        }
    } catch (error) { throw error; } 
    finally { if (conn) conn.release(); }
}

export async function addUserResponsable(formUsuarioAtleta) {
    const conn = await mysqlPoolConnect.getConnection();
    const RESULT_PROCESS = {
        success: false,
        message: 'No se completo el registro del usuario Responsable',
        data: {idUsuario: ''}
    }
    try {
        
        // primero verficar que el Email y DUI no este en uso
        const emailIsAvailable = await adminUserSubSvc.checkEmailAvailability(formUsuarioAtleta.email);
        if (emailIsAvailable === false) {
            RESULT_PROCESS.message = 'El Email no esta disponible';
            return RESULT_PROCESS
        }
        const duiIsUnique = await adminUserSubSvc.checkDuiIsUnique(formUsuarioAtleta.dui);
        if (duiIsUnique === false) {
            RESULT_PROCESS.message = 'El DUI no esta disponible';
            return RESULT_PROCESS
        }

        const values = Object.values(inserFormat.usuarioResponsable(formUsuarioAtleta));
        const [result] = await conn.execute(queriesAdminUser.ADD_USUARIO_RESPONSABLE, values);

        // puede retornar el id de registro insertado o retornal null si fallo
        if (result?.insertId === null) {
            RESULT_PROCESS.success = true;
            RESULT_PROCESS.message = 'El usuario responsable se registro con exito';
            RESULT_PROCESS.data.idUsuario = idInsert;
            return RESULT_PROCESS;
        }
        return RESULT_PROCESS;

    } catch (error) { throw error;} finally { conn?.release(); }
}

export async function addAtletaJunior(formAtletaJunior, idResponsable) {
    const RESULT_PROCESS = {
        success: false,
        message: 'No se ha podido registrar el Usuario Atleta Junior',
        data: {idUsuario: ''}
    }
    const conn = await mysqlPoolConnect.getConnection();
    try {

        // validamos la existencia del Email Responsable con Dui Relacionado
        const responsableExist = adminUserSubSvc.checkResponsableExist(formAtletaJunior.emailResponsable, formAtletaJunior.duiResponsable);

        if (responsableExist === false) {
            RESULT_PROCESS.message = 'No se ha encontrado ningun Usuario Responsable con los datos proporcionados';
            return RESULT_PROCESS;
        }

        // formateamos los valores y los convertimos en un array
        const valuesAtletaJunior = Object.values(inserFormat.usuarioAtletaJunior(formAtletaJunior));
        // iniciamos la transaccion de insercion en multiples tablas
        await conn.beginTransaction();
        // registramos el usuario atleta junior
        const [result] = await conn.execute(queriesAdminUser.ADD_USUARIO_ATLETA_JUNIOR, valuesAtletaJunior);
        // obtenemos el id del registro
        const idAtletaJrAdded =  result?.insertId ?? null;

        // verificamos que haya sido resgitrado
        if (idAtletaJrAdded === null) {
            await conn.rollback();
            return RESULT_PROCESS; // resultado Bad Request por default
        }

        // Continuamos. registamos al responsable con el atleta junior
        const [resultRel] = await conn.execute(queriesAdminUser.Add_RELACION_RESPONSABLE_ATLETAJR, [idResponsable, idAtletaJrAdded]);
        // validamos que se registraron correctamente
        const idRelacionAdded = resultRel?.insertId ?? null;

        // Si por alguna razon no se registro la relacion de ambos hacemos RollBack
        if (idRelacionAdded === null) {
            await conn.rollback();
            return RESULT_PROCESS; // resultado Bad Request por default
        }

        // Si ambos registros fueron exitos entonces enviamos, succes al cliente y hacemos Commit
        await conn.commit();
        // Mensage de exito
        RESULT_PROCESS.success = true;
        RESULT_PROCESS.message = 'El usuario atleta junior se registro con exito';
        RESULT_PROCESS.data.idUsuario = idAtletaJrAdded;
        
        return RESULT_PROCESS;

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
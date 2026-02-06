import { mysqlPoolConnect } from "../../config/database/db-connect.js"
import * as adminUserSubSvc from '../../subservices/admin-usuarios.subservices.js'
import * as inserFormat from '../../utils/insert-formats-db.js'
import * as queriesAdminUser from '../../repositories/admin-usuario.queries.js'
import * as queriesUser from '../../repositories/usuario-account.queries.js'
import * as securityQueries from '../../repositories/security.quieries.js'
import * as adminGymQueries from '../../repositories/admin-gym.queries.js'

export async function findUsuarioById(idUsuario) {
    const RESULT_PROCESS = {
        success: false,
        message: 'Usuario no encontrado',
        perfilUsuario: []
    }
    const conn = await mysqlPoolConnect.getConnection();
    try {
        const [result] = await conn.execute(queriesAdminUser.FIND_USUARIO_BY_ID, [idUsuario]);
        console.log(result)
        // verficar que si exista
        if (result.length === 0) {
            return RESULT_PROCESS;
        } else {
            RESULT_PROCESS.success = true;
            RESULT_PROCESS.message = 'Usuario encontrado';            
            RESULT_PROCESS.perfilUsuario = result[0];
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
        !nombre ? nombre = '' : nombre.trim();
        !apellido ? apellido = '' : apellido.trim();

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
        idUsuario: ''
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

        const values = Object.values(inserFormat.usuarioAtleta(formUsuarioAtleta)); console.log(values)
        const [result] = await conn.execute(queriesAdminUser.ADD_USUARIO_ATLETA, values);
        const idInsert = result?.insertId ?? null;

        if (idInsert !== null) {
            RESULT_PROCESS.success = true;
            RESULT_PROCESS.message = 'El nuevo atleta se registro con exito';
            RESULT_PROCESS.idUsuario = idInsert;
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
        formUsuarioAtleta.telefono = '75251255'; 
        formUsuarioAtleta.pass_hash = '123';
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
        if (result?.insertId !== null) {
            RESULT_PROCESS.success = true;
            RESULT_PROCESS.message = 'El usuario responsable se registro con exito';
            RESULT_PROCESS.data.idUsuario = result.insertId;
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

export async function realizarPagoSuscripcionUserLocal(formPagoSuscripLocal) {
    const RESULT_PROCESS = {
        success: false,
        message: 'No se ha podido registrar el Usuario Atleta Junior',
        suscripcionInfo: {}
    }
    const conn = await mysqlPoolConnect.getConnection();
    try {
        await conn.beginTransaction();

        // validamos la existencia del ID del admin que realizo el pago
        const [resultIdAdmin] = await conn.execute(securityQueries.FIND_ADMIN_BY_ID, [formPagoSuscripLocal.idAdmin]);
        const idAdmin = resultIdAdmin[0]?.idAdmin ?? null;

        if (idAdmin === null) {
            await conn.rollback();
            RESULT_PROCESS.message = "Ocurrio un Error al validar el Adminitrador que realizar el pago";
            return RESULT_PROCESS;
        }
        
        // validamos la existencia del Email y Dui del usuario que esta pagando
        const [resultIdUsuario] = await conn.execute(queriesUser.FIND_USER_BY_EMAIL_DUI, [formPagoSuscripLocal.email, formPagoSuscripLocal.dui]);
        const idUsuario = resultIdUsuario[0]?.idUsuario ?? null;

        if (idUsuario === null) {
            await conn.rollback();
            RESULT_PROCESS.message = 'No se ha encontrado ningun Usuario con los datos proporcionados';
            return RESULT_PROCESS;
        }


        // CONTRUIMOS LA FUNCION PARA REALIZAR PAGO DE SUSCRIPCION AL GYM
        // obtener costo de la suscripcion a traves de el ID
        const [resultPlan] = await conn.execute(adminGymQueries.GET_PLAN_BY_ID, [formPagoSuscripLocal.idPlan]);
        const planPago = resultPlan[0] ?? null;

        if (planPago === null) {
            await conn.rollback();
            RESULT_PROCESS.message = 'Ocurrio un Error al procesar el Plan a suscribirse';
            return RESULT_PROCESS;
        }

        // crear la suscripcion
        const fechaInicio = new Date();
        const fechaFinalizacion = new Date(fechaInicio);
        fechaFinalizacion.setDate(fechaInicio.getDate() + planPago.numMeses * 30);

        const valuesSuscripcion = [fechaInicio.toISOString().split('T')[0], fechaFinalizacion.toISOString().split('T')[0], planPago.idPlan, idUsuario];
        const [resultCrearSuscripcion] = await conn.execute(adminGymQueries.CREATE_SUSCRIPCION_USUARIO, valuesSuscripcion);
        const idSuscripcionUsuario = resultCrearSuscripcion.idInsert ?? null;
        // verficar la creacion de registro
        if (idSuscripcionUsuario === null) {
            await conn.rollback();
            RESULT_PROCESS.message = 'Ocurrio un Error al procesar la Suscripcion';
            return RESULT_PROCESS;
        }

        // continuamos creado el pago local de usuario
        const montoInicial = planPago.precio;
        const descuento = 0;
        const montoTotal = montoInicial - descuento;
        const idMetodoPago = 1; // Metodo de Pago Local default es ID 1-UNO

        const valuesSuscripcionPago = [montoInicial, descuento, montoTotal, idMetodoPago, idSuscripcionUsuario];
        const [resultSuscripcionPago] = await conn.execute(adminGymQueries.CREATE_SUSCRIPCION_PAGO, valuesSuscripcionPago);
        const idSuscripcionPago = resultSuscripcionPago.idInsert ?? null;
        
        if (idSuscripcionPago === null) {
            await conn.rollback();
            RESULT_PROCESS.message = 'Ocurrio un Error al procesar el Pago de la Suscripcion';
            return RESULT_PROCESS;
        }

        // Finalmente si todo salio bien hacemos el commit de la trasanccion
        await conn.commit();

        // Obtener la info de la Suscripcion realiza
        const [resultSuscripcionInfo] = await conn.execute(adminGymQueries.GET_SUSCRIPCION_USER_INFO_BY_ID, [idSuscripcionUsuario]);


        // Mensage de exito
        RESULT_PROCESS.success = true;
        RESULT_PROCESS.message = 'La suscripcion se ha realizado con exito';
        RESULT_PROCESS.suscripcionInfo = resultSuscripcionInfo[0];
        
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
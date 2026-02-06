import { mysqlPoolConnect } from '../../config/database/db-connect.js'
import * as securityQuery from '../../repositories/security.quieries.js'
import { generateJWT, verifyJWT } from "../../config/security/auth-config.js";


export async function validarToken(token) {
    const RESULT_PROCESS = {
        success: false,
        message: 'El Token ha expirado o no es valido',
    }

    const tokenValidation = verifyJWT(token);
    // verificamos is el token fue valido o no
    if (tokenValidation === null) {
        return RESULT_PROCESS;
    }

    // construimos mensaje de exito en la validacion del token
    RESULT_PROCESS.success = true;
    RESULT_PROCESS.message = 'El Token es valido';
    
    return RESULT_PROCESS;
};

export async function generarTokenSuperAdmin(formLoginAdmin) {
    const RESULT_PROCESS = {
        success: false,
        message: 'El Email o la Contrasena no son validos',
        idUsuario: '',
        token: ''
    }
    const conn = await mysqlPoolConnect.getConnection();
    try {
        const loginValues = [formLoginAdmin.email, formLoginAdmin.pass];
        // buscamos el id del usuario relacionado al pass y email
        const [result] = await conn.execute(securityQuery.ID_SUPER_ADMIN_BY_LOGIN ,loginValues);

        const idAdmin = result[0]?.idAdmin ?? null;
        // verificacion 1
        if (idAdmin === null) {
            return RESULT_PROCESS;
        }
        // continuacion 1
    /*
        // obtenemos los roles basado en el ID del Admin
        const [rolesAdmin] = await conn.execute(securityQuery.ADMIN_ROLES_BY_ID_ADMIN, [idAdmin]);

        // validacion 2
        // verificar que si existan resultados
        if (rolesAdmin.length === 0) {
            return RESULT_PROCESS;
        }
        //continuacion 2
    */
        // procedemos a generar el JWT
        const payloadToken = {
            idUser: idAdmin,
            roles: ['SUPER']
        }
        
        RESULT_PROCESS.success = true;
        RESULT_PROCESS.message = 'Verificacion exitosa';
        RESULT_PROCESS.idUsuario = idAdmin;
        RESULT_PROCESS.token = generateJWT(payloadToken);
        
        return RESULT_PROCESS;

    } catch (error) {
        throw error;
    } finally {
        if (conn) conn.release();
    }
};

export async function generarTokenAdmin(formLoginAdmin) {
    const RESULT_PROCESS = {
        success: false,
        message: 'El Email o la Contrasena no son validos',
        idUsuario: '',
        token: ''
    }
    const conn = await mysqlPoolConnect.getConnection();
    try {
        const loginValues = [formLoginAdmin.email, formLoginAdmin.pass];
        // buscamos el id del usuario relacionado al pass y email
        const [result] = await conn.execute(securityQuery.ID_ADMIN_BY_LOGIN ,loginValues);

        const idAdmin = result[0]?.idAdmin ?? null;
        // verificacion 1
        if (idAdmin === null) {
            return RESULT_PROCESS;
        }
        // continuacion 1
        // obtenemos los roles basado en el ID del Admin
        const [rolesAdmin] = await conn.execute(securityQuery.ADMIN_ROLES_BY_ID_ADMIN, [idAdmin]);

        // validacion 2
        // verificar que si existan resultados
        if (rolesAdmin.length === 0) {
            return RESULT_PROCESS;
        }
        //continuacion 2

        // procedemos a generar el JWT
        const payloadToken = {
            idUser: idAdmin,
            roles: rolesAdmin.map(row => row.rol)
        }
        RESULT_PROCESS.success = true;
        RESULT_PROCESS.message = 'Verificacion exitosa';
        RESULT_PROCESS.idUsuario = idAdmin;
        RESULT_PROCESS.token = generateJWT(payloadToken);
        
        return RESULT_PROCESS;

    } catch (error) {
        throw error;
    } finally {
        if (conn) conn.release();
    }
}

export async function generarTokenUser(formLoginUser) {
    const RESULT_PROCESS = {
        success: false,
        message: 'El Email o Contrasena son Incorrectos',
        idUser: '',
        token: ''
    }
    const conn = await mysqlPoolConnect.getConnection();
    try {
        const loginValues = [formLoginUser.email, formLoginUser.pass];
        // buscamos el id del usuario relacionado al pass y email
        const [resultLogin] = await conn.execute(securityQuery.ID_USUARIO_BY_LOGIN, loginValues);
        const idUsuario = resultLogin[0]?.idUsuario ?? null;
        
        // detenemos todo el proceso si los datos son no validos BREAK 1
        if (idUsuario === null) {
            return RESULT_PROCESS;
        }
        
        // si las credenciales son validas continuamos el proceso
        // obtenemos los roles basado en el ID del Admin
        const [resultRoles] = await conn.execute(securityQuery.GET_ROLES_USUARIO_BY_ID, [idUsuario]);
        // verificar que si existan resultados
        const rolesAdmin = resultRoles ?? null;
        
        console.log('OK >>')
        // Validamos que existan roles para ese usuario BREAK 2
        if(rolesAdmin === null) {
            return RESULT_PROCESS;
        }
        // Si existen roles continuamos
        // procedemos a generar el JWT
        const payloadToken = {
            idUser: idUsuario,
            roles: rolesAdmin.map(row => row.rol)
        }
        
        // Construimos el mensaje de exito para el token generado
        RESULT_PROCESS.success = true;
        RESULT_PROCESS.message = 'OK';
        RESULT_PROCESS.idUser = idUsuario;
        RESULT_PROCESS.token = generateJWT(payloadToken);

        return RESULT_PROCESS;
            
      } catch (error) {
        throw error;
    } finally {
        if (conn) conn.release();
    }
};
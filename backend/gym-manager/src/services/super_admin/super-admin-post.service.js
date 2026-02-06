import { mysqlPoolConnect } from "../../config/database/db-connect.js"
import * as superAdminQueries  from '../../repositories/super-admin.queries.js'



export async function svcUpdateAdmin(formUpdAdmin) {
    const PROCESS_RESULT = {
        success: false, message: 'No se completo la actualizacion del Admin', idAdmin: ''
    }
    const conn = await mysqlPoolConnect.getConnection();
    try {

        const adminValues = [formUpdAdmin.nombre, formUpdAdmin.apellido, formUpdAdmin.dui, formUpdAdmin.telefono, formUpdAdmin.id_admin];
        console.log('UPDATE ADMIN >> ', adminValues);

        const [resultUpddmin] = await conn.execute(superAdminQueries.UPDATE_ADMIN_BY_ID, adminValues);
        
        if(resultUpddmin.affectedRows === 0) { return PROCESS_RESULT; }

        PROCESS_RESULT.success = true;
        PROCESS_RESULT.message = 'El nuevo Administrador se actualizo con exito';
        PROCESS_RESULT.idAdmin = adminValues.id_admin;

        return PROCESS_RESULT;

    } catch (error) { throw error; }
    finally {conn?.release(); }
};

export async function svcAddAdmin(formAddAdmin) {
    const PROCESS_RESULT = {
        success: false, message: 'No se completo el Registro del Admin', idAdmin: ''
    }
    const conn = await mysqlPoolConnect.getConnection();
    try {

        const adminValues = [formAddAdmin.nombre, formAddAdmin.apellido, formAddAdmin.fechaNacimiento, formAddAdmin.dui, formAddAdmin.telefono];
        // const rolesValues = formAddAdmin.roles;
        const rolesValues = [1, 2];

        await conn.beginTransaction();
        const [resultAddAdmin] = await conn.execute(superAdminQueries.CREATE_ADMIN, adminValues);
        const idAdmin = resultAddAdmin.insertId ?? null;
        
        if(idAdmin === null) { await conn.rollback(); return PROCESS_RESULT; }
    

        for (let i = 0; i < rolesValues.length; i++) {
            const [resultAddRol] = await conn.execute(superAdminQueries.ADD_ROLES_ADMIN_BY_ID, [rolesValues[i], idAdmin]);
            if (!resultAddAdmin.insertId) {
                await conn.rollback();
                return PROCESS_RESULT;
            }
        }

        await conn.commit();

        PROCESS_RESULT.success = true;
        PROCESS_RESULT.message = 'El nuevo Administrador se registro con exito';
        PROCESS_RESULT.idAdmin = idAdmin;

        return PROCESS_RESULT;

    } catch (error) { await conn.rollback(); throw error; }
    finally {conn?.release(); }
};

export async function svcUpdatePlan(formUpdPlan) {
    const PROCESS_RESULT = {
        success: false, message: 'No se completo la Actualizacion del Plan', idPlan: ''
    }
    const conn = await mysqlPoolConnect.getConnection();
    try {

        const planValues = [formUpdPlan.nombre, formUpdPlan.descripcion, parseFloat(formUpdPlan.precio), parseInt(formUpdPlan.num_meses), formUpdPlan.id_plan];
    console.log(planValues);
        const [resultAddPlan] = await conn.execute(superAdminQueries.UPDATE_PLAN_BY_ID, planValues);
        const idPlan = resultAddPlan.insertId ?? null;
        
        if(idPlan === null) { return PROCESS_RESULT; }
        
        PROCESS_RESULT.success = true;
        PROCESS_RESULT.message = 'El Plan se Actualizo con exito';
        PROCESS_RESULT.idPlan = idPlan;
        return PROCESS_RESULT;

    } catch (error) { throw error; }
    finally {conn?.release(); }
};

export async function svcUpdateOferta(formUpdOferta) {
    const PROCESS_RESULT = {
        success: false, message: 'No se completo la Actualizacion de la Oferta', idOferta: ''
    }
    const conn = await mysqlPoolConnect.getConnection();
    try {

        const planValues = [formUpdOferta.nombre, formUpdOferta.descripcion, parseInt(formUpdOferta.descuento), formUpdOferta.fechaIncio, formUpdOferta.fechaFinalizacion,  formUpdOferta.id_oferta];
    console.log(planValues);
        const [resultUpdOferta] = await conn.execute(superAdminQueries.UPDATE_OFERTA_BY_ID, planValues);
        
        if(resultUpdOferta.affectedRows === 0) { return PROCESS_RESULT; }
        
        PROCESS_RESULT.success = true;
        PROCESS_RESULT.message = 'La Oferta se Actualizo con exito';
        PROCESS_RESULT.idOferta = formUpdOferta.id_oferta;
        return PROCESS_RESULT;

    } catch (error) { throw error; }
    finally {conn?.release(); }
};

export async function svcAddPlan(formAddPlan) {
    const PROCESS_RESULT = {
        success: false, message: 'No se completo el Registro del nuevo Plan', idPlan: ''
    }
    const conn = await mysqlPoolConnect.getConnection();
    try {

        const planValues = [formAddPlan.nombre, formAddPlan.descripcion, Number(formAddPlan.precio), parseInt(formAddPlan.num_meses)];
    console.log(planValues);
        const [resultAddPlan] = await conn.execute(superAdminQueries.CREATE_PLAN, planValues);
        const idPlan = resultAddPlan.insertId ?? null;
        
        if(idPlan === null) { return PROCESS_RESULT; }
        
        PROCESS_RESULT.success = true;
        PROCESS_RESULT.message = 'El nuevo Plan se registro con exito';
        PROCESS_RESULT.idPlan = idPlan;
        return PROCESS_RESULT;

    } catch (error) { throw error; }
    finally {conn?.release(); }
};

export async function svcAddOferta(formAddOferta) {
    const PROCESS_RESULT = {
        success: false, message: 'No se completo el Registro de la nueva Oferta', idOferta: ''
    }
    const conn = await mysqlPoolConnect.getConnection();
    try {

        const ofertaValues = Object.values(formAddOferta);
    console.log(ofertaValues);
        const [resultAddOferta] = await conn.execute(superAdminQueries.CREATE_OFERTA, ofertaValues);
        const idOferta = resultAddOferta.insertId ?? null;
        
        if(idOferta === null) { return PROCESS_RESULT; }
        
        PROCESS_RESULT.success = true;
        PROCESS_RESULT.message = 'La nueva Oferta se registro con exito';
        PROCESS_RESULT.idOferta = idOferta;
        return PROCESS_RESULT;

    } catch (error) { throw error; }
    finally {conn?.release(); }
}

export async function svcDeleteAdmin(idAdmin) {
    const PROCESS_RESULT = {
        success: false, message: 'Ocurrio un error al Eliminar el Administrador, posiblemente hay datos relacionados', idAdmin: ''
    }
    const conn = await mysqlPoolConnect.getConnection();
    try {
        
        console.log('ELIMINAR ID ADMIN >> ', idAdmin);
        const [resultDeleteAdmin] = await conn.execute(superAdminQueries.DELETE_ADMIN_BY_ID, [parseInt(idAdmin)]);
        console.log(resultDeleteAdmin);
        if(resultDeleteAdmin.affectedRows === 0) { return PROCESS_RESULT; }
        
        PROCESS_RESULT.success = true;
        PROCESS_RESULT.message = 'El Administrador se Elimino exito';
        PROCESS_RESULT.idAdmin = idAdmin;
        return PROCESS_RESULT;

    } catch (error) { throw error; }
    finally {conn?.release(); }
}

export async function svcDeletePlan(idPlan) {
    const PROCESS_RESULT = {
        success: false, message: 'Ocurrio un error al Eliminar el Plan, posiblemente hay datos relacionados', idPlan: ''
    }
    const conn = await mysqlPoolConnect.getConnection();
    try {

        const [resultDeletePlan] = await conn.execute(superAdminQueries.DELETE_PLAN_BY_ID, [idPlan]);
        
        if(resultDeletePlan.affectedRows === 0) { return PROCESS_RESULT; }
        
        PROCESS_RESULT.success = true;
        PROCESS_RESULT.message = 'El Plan se Elimino exito';
        PROCESS_RESULT.idPlan = idPlan;
        return PROCESS_RESULT;

    } catch (error) { throw error; }
    finally {conn?.release(); }
}

export async function svcDeleteOferta(idOferta) {
    const PROCESS_RESULT = {
        success: false, message: 'Ocurrio un error al Eliminar la Oferta, posiblemente hay datos relacionados', idOferta: ''
    }
    const conn = await mysqlPoolConnect.getConnection();
    try {

        const [resultDeleteOferta] = await conn.execute(superAdminQueries.DELETE_OFERTA_BY_ID, [idOferta]);
        
        if(resultDeleteOferta.affectedRows === 0) { return PROCESS_RESULT; }
        
        PROCESS_RESULT.success = true;
        PROCESS_RESULT.message = 'La Oferta se Elimino con exito';
        PROCESS_RESULT.idOferta = idOferta;
        return PROCESS_RESULT;

    } catch (error) { throw error; }
    finally {conn?.release(); }
}
import { mysqlPoolConnect } from "../../config/database/db-connect.js"
import * as superAdminQueries  from '../../repositories/super-admin.queries.js'

export async function svcListaAdmins() {
    const PROCESS_RESULT = {
        success: false, message: 'No se han encontrado Admins', listaAdmins: []
    }
    const conn = await mysqlPoolConnect.getConnection();
    try {
        const [resultListAdmins] = await conn.execute(superAdminQueries.GET_LIST_ADMINS);

        if(resultListAdmins.length === 0) {
            return PROCESS_RESULT;
        }
        
        PROCESS_RESULT.success = true;
        PROCESS_RESULT.message = 'Admins que han sido encontrados';
        PROCESS_RESULT.listaAdmins = resultListAdmins;
        return PROCESS_RESULT;

    } catch (error) { throw error; }
    finally {conn?.release(); }
};

export async function svcListaPlanes() {
    const PROCESS_RESULT = {
        success: false, message: 'No se han encontrado Planes', listaPlanes: []
    }
    const conn = await mysqlPoolConnect.getConnection();
    try {
        const [resultListaPlanes] = await conn.execute(superAdminQueries.GET_LIST_PLANES);

        if(resultListaPlanes.length === 0) {
            return PROCESS_RESULT;
        }
        
        PROCESS_RESULT.success = true;
        PROCESS_RESULT.message = 'Planes que han sido encontrados';
        PROCESS_RESULT.listaPlanes = resultListaPlanes;
        return PROCESS_RESULT;

    } catch (error) { throw error; }
    finally {conn?.release(); }
};

export async function svcListaOfertas() {
    const PROCESS_RESULT = {
        success: false, message: 'No se han encontrado Ofertas', listaOfertas: []
    }
    const conn = await mysqlPoolConnect.getConnection();
    try {
        const [resultListaOfertas] = await conn.execute(superAdminQueries.GET_LIST_OFERTAS);

        if(resultListaOfertas.length === 0) {
            return PROCESS_RESULT;
        }
        
        PROCESS_RESULT.success = true;
        PROCESS_RESULT.message = 'Ofertas que han sido encontrados';
        PROCESS_RESULT.listaOfertas = resultListaOfertas;
        return PROCESS_RESULT;

    } catch (error) { throw error; }
    finally {conn?.release(); }
};

export async function svcFindAdminById(idAdmin) {
    const PROCESS_RESULT = {
        success: false, message: 'No se ha encontrado niguna Administrador con dicho ID', adminInfo: {}
    }
    const conn = await mysqlPoolConnect.getConnection();
    try {
        const [resultAdminInfo] = await conn.execute(superAdminQueries.FIND_ADMIN_BY_ID, [idAdmin]);

        if(resultAdminInfo.length === 0) {
            return PROCESS_RESULT;
        }
        
        PROCESS_RESULT.success = true;
        PROCESS_RESULT.message = 'Se ha recuperado el siguiente Administrador';
        PROCESS_RESULT.adminInfo = resultAdminInfo[0];
        return PROCESS_RESULT;

    } catch (error) { throw error; }
    finally {conn?.release(); }
}

export async function svcFindPlanById(idPlan) {
    const PROCESS_RESULT = {
        success: false, message: 'No se ha encontrado niguna Plan con dicho ID', planInfo: {}
    }
    const conn = await mysqlPoolConnect.getConnection();
    try {
        console.log('ID PLAN', idPlan)
        const [resultPlanInfo] = await conn.execute(superAdminQueries.FIND_PlAN_BY_ID, [idPlan]);

        if(resultPlanInfo.length === 0) {
            return PROCESS_RESULT;
        }
        
        PROCESS_RESULT.success = true;
        PROCESS_RESULT.message = 'Se ha recuperado el siguiente Plan';
        PROCESS_RESULT.planInfo = resultPlanInfo[0];
        return PROCESS_RESULT;

    } catch (error) { throw error; }
    finally {conn?.release(); }
}

export async function svcFindOfertaById(idOferta) {
    const PROCESS_RESULT = {
        success: false, message: 'No se ha encontrado niguna oferta con dicho ID', ofertaInfo: {}
    }
    const conn = await mysqlPoolConnect.getConnection();
    try {
        const [resultOfertaInfo] = await conn.execute(superAdminQueries.FIND_OFERTA_BY_ID, [idOferta]);

        if(resultOfertaInfo.length === 0) {
            return PROCESS_RESULT;
        }
        
        PROCESS_RESULT.success = true;
        PROCESS_RESULT.message = 'Se ha recuperado la siguiente Oferta';
        PROCESS_RESULT.ofertaInfo = resultOfertaInfo[0];
        return PROCESS_RESULT;

    } catch (error) { throw error; }
    finally {conn?.release(); }
}
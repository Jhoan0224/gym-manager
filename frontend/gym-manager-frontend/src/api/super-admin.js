import axios from "axios"
import { GET_SUPER_ADMIN_HEADERS } from "./auth";

const API_SUPER_ADMIN = import.meta.env.VITE_API_SUPER_ADMIN_DOMAIN;


export async function addNewAdmin(formAddAdmin) {
    const PROCESS_RESULT = {success: false, message: 'Ocurrio un Error al enviar la solictud al servidorsp.'}
    try {
        const resp = await axios.post(`${API_SUPER_ADMIN}/add-admin`, formAddAdmin, GET_SUPER_ADMIN_HEADERS());
        return resp.data;
        
    } catch (error) {
        return PROCESS_RESULT;
    }
};

export async function addNewPlan(formAddPlan) {
    const PROCESS_RESULT = {success: false, message: 'Ocurrio un Error al enviar la solictud al servidorsp.'}
    try {
        const resp = await axios.post(`${API_SUPER_ADMIN}/add-plan`, formAddPlan, GET_SUPER_ADMIN_HEADERS());
        return resp.data;
        
    } catch (error) {
        return PROCESS_RESULT;
    }
};

export async function addNewOferta(formAddOferta) {
    const PROCESS_RESULT = {success: false, message: 'Ocurrio un Error al enviar la solictud al servidorsp.'}
    try {
        const resp = await axios.post(`${API_SUPER_ADMIN}/add-oferta`, formAddOferta, GET_SUPER_ADMIN_HEADERS());
        return resp.data;
        
    } catch (error) {
        return PROCESS_RESULT;
    }
};

export async function updateAdminData(formUpdateAdmin) {
    const PROCESS_RESULT = {success: false, message: 'Ocurrio un Error al enviar la solictud al servidorsp.'}
    try {
        const resp = await axios.post(`${API_SUPER_ADMIN}/update-admin-data`, formUpdateAdmin, GET_SUPER_ADMIN_HEADERS());
        return resp.data;
        
    } catch (error) {
        return PROCESS_RESULT;
    }
};

export async function updateOferta(formUpdateOferta) {
    const PROCESS_RESULT = {success: false, message: 'Ocurrio un Error al enviar la solictud al servidorsp.'}
    try {
        const resp = await axios.post(`${API_SUPER_ADMIN}/update-oferta`, formUpdateOferta, GET_SUPER_ADMIN_HEADERS());
        return resp.data;
        
    } catch (error) {
        return PROCESS_RESULT;
    }
};

export async function updatePlan(formUpdatePlan) {
    const PROCESS_RESULT = {success: false, message: 'Ocurrio un Error al enviar la solictud al servidorsp.'}
    try {
        const resp = await axios.post(`${API_SUPER_ADMIN}/update-plan`, formUpdatePlan, GET_SUPER_ADMIN_HEADERS());
        return resp.data;
        
    } catch (error) {
        return PROCESS_RESULT;
    }
};


export async function deleteAdmin(idAdminDelete) {
    const PROCESS_RESULT = {success: false, message: 'Ocurrio un Error al enviar la solictud al servidorsp.'}
    try {
        const resp = await axios.delete(`${API_SUPER_ADMIN}/delete-admin/${idAdminDelete}`, GET_SUPER_ADMIN_HEADERS());
        return resp.data;
        
    } catch (error) {
        return PROCESS_RESULT;
    }
};

export async function deletePlan(idPlanDelete) {
    const PROCESS_RESULT = {success: false, message: 'Ocurrio un Error al enviar la solictud al servidorsp.'}
    try {
        const resp = await axios.delete(`${API_SUPER_ADMIN}/delete-plan/${idPlanDelete}`, GET_SUPER_ADMIN_HEADERS());
        return resp.data;
        
    } catch (error) {
        return PROCESS_RESULT;
    }
};

export async function deleteOferta(idOfertaDelete) {
    const PROCESS_RESULT = {success: false, message: 'Ocurrio un Error al enviar la solictud al servidorsp.'}
    try {
        const resp = await axios.delete(`${API_SUPER_ADMIN}/delete-oferta/${idOfertaDelete}`, GET_SUPER_ADMIN_HEADERS());
        return resp.data;
        
    } catch (error) {
        return PROCESS_RESULT;
    }
};

export async function getAdminConfig(idAdmin) {
    const PROCESS_RESULT = {success: false, message: 'Ocurrio un Error al enviar la solictud al servidorsp.'}
    try {
        const resp = await axios.get(`${API_SUPER_ADMIN}/config-admin/${idAdmin}`, GET_SUPER_ADMIN_HEADERS());
        return resp.data;
        
    } catch (error) {
        return PROCESS_RESULT;
    }
};

export async function getPlanConfig(idPlan) {
    const PROCESS_RESULT = {success: false, message: 'Ocurrio un Error al enviar la solictud al servidorsp.'}
    try {
        const resp = await axios.get(`${API_SUPER_ADMIN}/config-plan/${idPlan}`, GET_SUPER_ADMIN_HEADERS());
        return resp.data;
        
    } catch (error) {
        return PROCESS_RESULT;
    }
};
    
export async function getOfertaConfig(idOferta) {
    const PROCESS_RESULT = {success: false, message: 'Ocurrio un Error al enviar la solictud al servidorsp.'}
    try {
        const resp = await axios.get(`${API_SUPER_ADMIN}/config-oferta/${idOferta}`, GET_SUPER_ADMIN_HEADERS());
        return resp.data;
        
    } catch (error) {
        return PROCESS_RESULT;
    }
};

export async function getListaAdmins() {
    const PROCESS_RESULT = {success: false, message: 'Ocurrio un Error al enviar la solictud al servidorsp.'}
    try {
        const resp = await axios.get(`${API_SUPER_ADMIN}/lista-admins`, GET_SUPER_ADMIN_HEADERS());
        return resp.data;
        
    } catch (error) {
        return PROCESS_RESULT;
    }
};

export async function getListaPlanes() {
    const PROCESS_RESULT = {success: false, message: 'Ocurrio un Error al enviar la solictud al servidorsp.'}
    try {
        const resp = await axios.get(`${API_SUPER_ADMIN}/lista-planes`, GET_SUPER_ADMIN_HEADERS());
        return resp.data;
        
    } catch (error) {
        return PROCESS_RESULT;
    }
};

export async function getListaOfertas() {
    const PROCESS_RESULT = {success: false, message: 'Ocurrio un Error al enviar la solictud al servidorsp.'}
    try {
        const resp = await axios.get(`${API_SUPER_ADMIN}/lista-ofertas`, GET_SUPER_ADMIN_HEADERS());
        return resp.data;
        
    } catch (error) {
        return PROCESS_RESULT;
    }
};
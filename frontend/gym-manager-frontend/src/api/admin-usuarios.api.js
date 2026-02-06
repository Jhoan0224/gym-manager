import axios from "axios"
import { GET_ADMIN_HEADERS } from "./auth.js";

const API_ADMIN_USUARIOS = import.meta.env.VITE_API_ADMIN_DOMAIN;


export async function registerAtleta(formAddAtleta) {
    const PROCESS_RESULT = {
        success: false,
        message: 'Ocurrio un error al realizar la peticion',
        data: {}
    }
    try {
        const resp = await axios.post(`${API_ADMIN_USUARIOS}/add-atleta`, formAddAtleta, GET_ADMIN_HEADERS());
        // la data contiene un json con success: boolean, message: text y data: jsonObject
        return resp.data;

    } catch (error) {
        return PROCESS_RESULT;
    }
}

export async function registerAtletaJunior(formAddAtletaJunior) {
    const PROCESS_RESULT = {
        success: false,
        message: 'Ocurrio un error al realizar la peticion',
        data: {}
    }
    try {
        const resp = await axios.post(`${API_ADMIN_USUARIOS}/add-atleta-junior`, formAddAtletaJunior, GET_ADMIN_HEADERS());
        return resp.data;

    } catch (error) {
        console.error('error en post atleta junior api call: ', error )
        return PROCESS_RESULT;
    }
}

export async function registerResponsable(formAddResponsable) {
    const PROCESS_RESULT = {
        success: false,
        message: 'Ocurrio un error al realizar la peticion',
        data: []
    }
    try {
        const resp = await axios.post(`${API_ADMIN_USUARIOS}/add-responsable`, formAddResponsable, GET_ADMIN_HEADERS());
        return resp.data;

    } catch (error) {
        console.error('error en post call api responsable: ', error )
        return PROCESS_RESULT;
    }
}

export async function findUserById(idUsuario){
    const PROCESS_RESULT = {
        success: false,
        message: 'Ocurrio un error al realizar la peticion al servidor',
        data: []
    }
    try {
        const httpRequest = `${API_ADMIN_USUARIOS}/find-usuario/id/${idUsuario}`;
        const resp = await axios.get(httpRequest, GET_ADMIN_HEADERS());
        return resp.data;

    } catch (error) {
        return PROCESS_RESULT;
    }
}

export async function findUserByEmail(email){
    const PROCESS_RESULT = {
        success: false,
        message: 'Ocurrio un error al realizar la peticion al servidor',
        data: []
    }
    try {
        const httpRequest = `${API_ADMIN_USUARIOS}/find-usuario/email/${email}`;
        const resp = await axios.get(httpRequest, GET_ADMIN_HEADERS());
        return resp.data;

    } catch (error) {
        return PROCESS_RESULT;
    }
}

export async function findUserByNames(nombre, apellido) {
    const PROCESS_RESULT = {
        success: false,
        message: 'Ocurrio un error al realizar la peticion al servidor',
        data: []
    }
    try {
        const httpRequest = `${API_ADMIN_USUARIOS}/find-usuario/nombre/${nombre}/apellido/${apellido}`;
        const resp = await axios.get(httpRequest, GET_ADMIN_HEADERS());
        return resp.data;

    } catch (error) {
        return PROCESS_RESULT;
    }
}

export async function getPerfilUserById(idAtleta) {
    const PROCESS_RESULT = {
        success: false,
        message: 'Ocurrio un error al realizar la peticion',
        data: {}
    }
    try {
        const resp = await axios.get(`${API_ADMIN_USUARIOS}/perfil-usuario/id${idAtleta}`, GET_ADMIN_HEADERS());
        return resp.data;
s
    } catch (error) {
        console.log('error get perfil usuario admin call api :>> ', error);
        return PROCESS_RESULT;
    }
}

export async function realizarPagoUserLocal(formPago) {
    const PROCESS_RESULT = {
        success: false,
        message: 'Ocurrio un error al realizar la peticion al Servidor',
        data: {}
    }
    try {
        const resp = await axios.post(`${API_ADMIN_USUARIOS}/pago-user-local`, formPago, GET_ADMIN_HEADERS());
        return resp.data;
s   
    } catch (error) {
        console.log('Error Pago Local call api :>> ', error);
        return PROCESS_RESULT;
    }
}


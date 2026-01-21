import axios from "axios";
import { GET_CURRENT_ID_USER, GET_USER_HEADERS } from "./auth.js";

const API_USUARIO_ACCOUNT = import.meta.env.VITE_API_USER_DOMAIN;

export async function getPerfilUsuario() {
    const PROCESS_RESULT = {
        success: false,
        message: 'Ocurrio un error al realizar la peticion',
        data: {}
    }
    try {

        const idUsuario = GET_CURRENT_ID_USER();
        const resp = await axios.get(`${API_USUARIO_ACCOUNT}/perfil-usuario/id/${idUsuario}`, GET_USER_HEADERS());
        return resp.data;

    } catch (error) {
        console.error('Error ern getPerfilUsuario', error)
        return PROCESS_RESULT;
    }
}


export async function getSuscripcionUserData() {
    const PROCESS_RESULT = {
        success: false,
        message: 'Ocurrio un error al realizar la peticion',
        data: {}
    }
    try {

        const idUsuario = GET_CURRENT_ID_USER();
        const resp = await axios.get(`${API_USUARIO_ACCOUNT}/suscripcion-usuario/id/${idUsuario}`, GET_USER_HEADERS());
        return resp.data;

    } catch (error) {
        console.error('Error ern getPerfilUsuario', error)
        return PROCESS_RESULT;
    }
}
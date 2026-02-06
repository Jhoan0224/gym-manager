import axios from "axios";

const API_SUPER_ADMIN_LOGIN = import.meta.env.VITE_SUPER_ADMIN_LOGIN;
const API_ADMIN_LOGIN = import.meta.env.VITE_ADMIN_LOGIN;
const API_USER_LOGIN = import.meta.env.VITE_USER_LOGIN;
const API_USER_TOKEN_VALIDATION = import.meta.env.VITE_API_USER_TOKEN_VALIDATION;
const API_ADMIN_TOKEN_VALIDATION = import.meta.env.VITE_API_ADMIN_TOKEN_VALIDATION;
const API_SUPER_ADMIN_TOKEN_VALIDATION = import.meta.env.VITE_API_SUPER_ADMIN_TOKEN_VALIDATION;
const NAME_TOKEN_AUTH = import.meta.env.VITE_NAME_TOKEN_AUTH;
const NAME_CURRENT_ID_USER = import.meta.env.VITE_CURRENT_NAME_ID_USER;

export async function getSuperAdminAuth(formLogin) {
    const AUTH_RESULT = {success: false, message: 'Ocurrio un error al envial la solicitud al servidor LOGINSP'}
    try {
        // solicitar el JWT al server del gym
        const resp = await axios.post(`${API_SUPER_ADMIN_LOGIN}`, formLogin);

        // si fue exitoso el login, almacenamos el token y el id del usuario del token
        if (resp.data.success === true) {
            localStorage.setItem(NAME_TOKEN_AUTH, resp.data.token);
            localStorage.setItem(NAME_CURRENT_ID_USER, resp.data.idUser)
        }
        // construimos el mensaje para el cliente en caso de que no haya error de servidor
        return resp.data;
        
    } catch (error) {
        return AUTH_RESULT;
    }
}

export async function getAdminAuth(formLogin) {
    const AUTH_RESULT = {success: false, message: 'Ocurrio un error al envial la solicitud al servidor LOGIN'}
    try {
        // solicitar el JWT al server del gym
        const resp = await axios.post(`${API_ADMIN_LOGIN}`, formLogin);

        // si fue exitoso el login, almacenamos el token y el id del usuario del token
        if (resp.data.success === true) {
            localStorage.setItem(NAME_TOKEN_AUTH, resp.data.token);
            localStorage.setItem(NAME_CURRENT_ID_USER, resp.data.idUser)
        }
        // construimos el mensaje para el cliente en caso de que no haya error de servidor
        return resp.data;
        
    } catch (error) {
        return AUTH_RESULT;
    }
}

export async function getUserAuth(formLogin) {
    const AUTH_RESULT = {success: false, message: 'Ocurrio un error al envial la solicitud al servidor'}
    try {
        const resp = await axios.post(`${API_USER_LOGIN}`, formLogin);

        if (resp.data.success === true) {
            localStorage.setItem(NAME_TOKEN_AUTH, resp.data.token);
            localStorage.setItem(NAME_CURRENT_ID_USER, resp.data.idUser);
        }
        return resp.data;

    } catch (error) {
        return AUTH_RESULT;
    }
}

export async function validarSuperAdminAuthToken() {
    const VALIDATION_RESULT = {
        success: false,
        message: 'Ocurrion un error al realizar la solicitud al servidor',
    }
    try {
        const resp = await axios.get(API_SUPER_ADMIN_TOKEN_VALIDATION, GET_ADMIN_HEADERS());
        return resp.data; // contiene json con success: boolean y message: String
        
    } catch (error) {
        return VALIDATION_RESULT;
    }
}

export async function validarAdminAuthToken() {
    const VALIDATION_RESULT = {
        success: false,
        message: 'Ocurrion un error al realizar la solicitud al servidor',
    }
    try {
        const resp = await axios.get(API_ADMIN_TOKEN_VALIDATION, GET_ADMIN_HEADERS());
        return resp.data; // contiene json con success: boolean y message: String
        
    } catch (error) {
        return VALIDATION_RESULT;
    }
}

export async function validarUserAuthToken() {
    const VALIDATION_RESULT = {
        success: false,
        message: 'Ocurrion un error al realizar la solicitud al servidor',
    }
    try {
        const tokenCheck = localStorage.getItem(import.meta.env.VITE_NAME_TOKEN_AUTH);
        if (!tokenCheck) {
            return VALIDATION_RESULT;
        }
        const resp = await axios.get(API_USER_TOKEN_VALIDATION, GET_USER_HEADERS());
        return resp.data; // contiene json con success: boolean y message: String
        
    } catch (error) {
        // console.error('ERRRO EN ENVIAR LA VERIFICACION DEL TOKEN DE USUARIO', error);
        return VALIDATION_RESULT;
    }
}

export const GET_CURRENT_ID_USER = () => {
    return localStorage.getItem(`${NAME_CURRENT_ID_USER}`);
};

export const GET_SUPER_ADMIN_HEADERS = () => ({
    headers: {
        Authorization: `Bearer ${localStorage.getItem(NAME_TOKEN_AUTH)}`
    }
});

export const GET_ADMIN_HEADERS = () => ({
    headers: {
        Authorization: `Bearer ${localStorage.getItem(NAME_TOKEN_AUTH)}`
    }
});

export const GET_USER_HEADERS = () => ({
    headers: {
        Authorization: `Bearer ${localStorage.getItem(NAME_TOKEN_AUTH)}`
    }
});



// export const adminAuthHeader = `headers: {Authorization: Bearer ${localStorage.getItem('mytoken')}}`
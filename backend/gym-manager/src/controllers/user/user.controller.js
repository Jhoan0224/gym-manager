import { SERVER_ERROR } from "../../utils/message-response.js";
import * as userAtletaSvc from '../../services/usuario/user-atleta.service.js'

export const getPerfilUserAtleta = async (req, res ) => {
    const ROLES_ACCESO = ['ATLETA'];
    try {
        const idUsuarioSolicitado = req.params.idUsuario;

        const dataPerfilAtleta = await userAtletaSvc.getPerfiAtleta(idUsuarioSolicitado);

        if (dataPerfilAtleta.success === true) {
            return res.status(200).json(dataPerfilAtleta);
        } else {
            return res.status(404).json(dataPerfilAtleta);
        }

    } catch (error) {
        console.error('ERROR EN GET-PERFIL-USUARIO >> ', error)
        return res.status(500).json(SERVER_ERROR);
    }
}

export const getSuscripcionUserInfo = async (req, res ) => {
    const ROLES_ACCESO = ['ATLETA'];
    try {
        const idUsuarioSolicitado = req.params.idUsuario;

        const dataPerfilAtleta = await userAtletaSvc.svcSuscripcionUserInfo(idUsuarioSolicitado);

        if (dataPerfilAtleta.success === true) {
            return res.status(200).json(dataPerfilAtleta);
        } else {
            return res.status(404).json(dataPerfilAtleta);
        }

    } catch (error) {
        console.log('ERROR EN GET-SUSCRIPCION-USUARIO >>', error)
        return res.status(500).json(SERVER_ERROR);
    }
}

export const getListaEntrenosUser = async (req, res ) => {
    const ROLES_ACCESO = ['ATLETA'];
    try {
        const idUsuarioSolicitado = req.params.idUsuario;

        const dataPerfilAtleta = await userAtletaSvc.svcListaEntrenosUser(idUsuarioSolicitado);

        if (dataPerfilAtleta.success === true) {
            return res.status(200).json(dataPerfilAtleta);
        } else {
            return res.status(404).json(dataPerfilAtleta);
        }

    } catch (error) {
        return res.status(500).json(SERVER_ERROR);
    }
}

export const updateUserData = async (req, res ) => {
    const ROLES_ACCESO = ['ATLETA'];
    try {
        const formData = req.body;

        const dataPerfilAtleta = await userAtletaSvc.svcUpdateUserData(formData);

        if (dataPerfilAtleta.success === true) {
            return res.status(200).json(dataPerfilAtleta);
        } else {
            return res.status(404).json(dataPerfilAtleta);
        }

    } catch (error) {
        return res.status(500).json(SERVER_ERROR);
    }
}
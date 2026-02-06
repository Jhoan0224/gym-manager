import { SERVER_ERROR, UNAUTHORIZED } from "../../utils/message-response.js";
import * as atletaSvc from '../../services/admin/user-atleta-svc.js';


export const getPerfilAtleta = async (req, res) => {
    const ROLES_ACCESO = ['ADMIN'];
    let USER_IS_AUTHORIZED = false;
    try {
        // retraive userToken data added in the last MIDDLEWARE
        // const usuarioRoles = req.userData.roles;
        
        /* VALIDAR QUE EL USUARIO SOLO PUEDA SOLICITAR INFORMACION DE SU PERFIL
        * SOLO PUEDE SOLICITARLO SI TIENE EN EL JWT EL ROL DE 'ADMIN'
        */
       // VALIDACION DE ROLES
        // for (const ROL_ACC of ROLES_ACCESO) {
        //     if (usuarioRoles.includes(ROL_ACC)) {
        //         USER_IS_AUTHORIZED =  true;
        //     } else {
        //         USER_IS_AUTHORIZED = false;
        //         break;
        //     }
        // }
        // VERFICAR INMEDIATAMENTE SI ESTA AUTORIZADO O NO
        // if(USER_IS_AUTHORIZED === false ) {
        //    return res.status(401).json(UNAUTHORIZED);
        // }
        // VALIDACION DE ROLES
       
        
       // params to use in the service
       const idUsuarioSolicitado = req.params.idUsuario;
       
        // call to the service and get the data
        console.log('buscando...1')
        const dataPerfilAtleta = await atletaSvc.findUsuarioById(idUsuarioSolicitado);
        console.log('buscando...2')
        // verify the data obtained and Send a response to the Client
        if (dataPerfilAtleta.success) {
            return res.status(200).json(dataPerfilAtleta);

        } else {
           return res.status(404).json(dataPerfilAtleta);
        }
        
    } catch (error) {
        console.error('Error en Middleware getPerfilAtleta', error)
        return res.status(500).json(SERVER_ERROR);
    } 
}

export const addAtleta = async (req, res) => {
    try {
        // params to use in the service
        const formAtleta = req.body;
        // call to the service and get the data
        const resultAtletaAdded = await atletaSvc.addUserAtleta(formAtleta);

        // verify the data obtained and Send a response to the Client
        if (resultAtletaAdded.success) {
            return res.status(200).json(resultAtletaAdded);

        } else {
            return res.status(401).json(resultAtletaAdded);
        }
        
    } catch (error) {
        console.log('Error en Middleware getPerfilAtleta', error)
        return res.status(500).json(SERVER_ERROR);
    } 
}

export const addResponsable = async (req, res) => {
    try {
        // params to use in the service
        const formResponsable = req.body;
        // call to the service and get the data
        const resultResponsableAdded = await atletaSvc.addUserResponsable(formResponsable);

        // verify the data obtained and Send a response to the Client
        if (resultResponsableAdded.success) {
            return res.status(200).json(resultResponsableAdded);

        } else {
           return res.status(400).json(resultResponsableAdded);
        }
        
    } catch (error) {
        console.error('Error en CONTROLLER ADD RESPONSABLE', error)
       return res.status(500).send(SERVER_ERROR);
    } 
}

export const addAtletaJunior = async (req, res) => {
    try {
        const formAtletaJunior = req.body;
        // devuelve un resultado null si algo fallo
        const resultAtletaJrAdded = await atletaSvc.addAtletaJunior(formAtletaJunior);
        
        if (resultAtletaJrAdded.success) {
            return res.status(200).json(resultAtletaJrAdded);
        }
        else {
            return res.status(400).json(resultAtletaJrAdded);
        }
        
    } catch (error) {
        console.error('Error en Middleware AddAtletaJunior', error);
        return res.status(500).send(SERVER_ERROR);
    }
}

export const realizarPagoUserSuscripcionLocal = async (req, res) => {
    try {
        const formPagoSuscripcionLocal = req.body;
        // adding ID of admin who is processing the current payment 
        formPagoSuscripcionLocal.idAdmin = req.userData.idUsuarioToken;

        const resultProcess = await atletaSvc.realizarPagoSuscripcionUserLocal(formPagoSuscripcionLocal);
        
        if (resultProcess.success === true) {
           res.status(200).json(resultProcess)
        }
        else {
            res.status(400).json(resultProcess);
        }
        
    } catch (error) {
        console.error('Error en Middleware AddAtletaJunior', error);
        res.status(500).json(SERVER_ERROR);
    }
}
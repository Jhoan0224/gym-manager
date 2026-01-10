import { SERVER_ERROR, UNAUTHORIZED } from "../../utils/message-response.js";
import * as atletaSvc from '../../services/admin/user-atleta-svc.js';


export const getPerfilAtleta = async (req, res) => {
    const ROLES_ACCESO = ['ADMIN'];
    let USER_IS_AUTHORIZED = false;
    try {
        // retraive userToken data added in the last MIDDLEWARE
        const usuarioRoles = req.userData.roles;
        
        /* VALIDAR QUE EL USUARIO SOLO PUEDA SOLICITAR INFORMACION DE SU PERFIL
        * SOLO PUEDE SOLICITARLO SI TIENE EN EL JWT EL ROL DE 'ADMIN'
        */
       // VALIDACION DE ROLES
        for (const ROL_ACC of ROLES_ACCESO) {
            if (usuarioRoles.includes(ROL_ACC)) {
                USER_IS_AUTHORIZED =  true;
            } else {
                USER_IS_AUTHORIZED = false;
                break;
            }
        }
        // VERFICAR INMEDIATAMENTE SI ESTA AUTORIZADO O NO
        if(USER_IS_AUTHORIZED === false ) {
            res.status(401).json(UNAUTHORIZED);
        }
        // VALIDACION DE ROLES
       
        
       // params to use in the service
       const idUsuarioSolicitado = req.params.idUsuario;
       
        // call to the service and get the data
        const dataPerfilAtleta = await UsuarioSvc.getPerfilAtleta(idUsuarioSolicitado);

        // verify the data obtained and Send a response to the Client
        if (dataPerfilAtleta !== null) {
            res.status(200).json({
                susccess: true,
                message: 'Resultados obtenidos',
                data: dataPerfilAtleta
            });

        } else {
            res.status(404).json({
                susccess: false,
                message: 'No se han encontrado resultados',
                data: {}
            });
        }
        
    } catch (error) {
        console.error('Error en Middleware getPerfilAtleta', error)
        res.status(500).json(SERVER_ERROR);
    } 
}

export const addAtleta = async (req, res) => {
    try {
        // params to use in the service
        const formAtleta = req.body;
        // call to the service and get the data
        const resultAtletaAdded = await atletaSvc.addUserAtleta(formAtleta);

        // verify the data obtained and Send a response to the Client
        if (resultAtletaAdded !== null) {
            res.status(200).json({
                susccess: true,
                // es un json que contine un message: '' y data: {}
                resultAtletaAdded
            });

        } else {
            res.status(500).send(SERVER_ERROR);
        }
        
    } catch (error) {
        console.log('Error en Middleware getPerfilAtleta', error)
        req.status(500).send(SERVER_ERROR);
    } 
}

export const addResponsable = async (req, res) => {
    try {
        // params to use in the service
        const formResponsable = req.body;
        // call to the service and get the data
        const resultResponsableAdded = await atletaSvc.addUserResponsable(formResponsable);

        // verify the data obtained and Send a response to the Client
        if (resultResponsableAdded !== null) {
            res.status(200).json({
                susccess: true,
                // es un json que contine un message: '' y data: {}
                resultResponsableAdded
            });

        } else {
            res.status(500).send(SERVER_ERROR);
        }
        
    } catch (error) {
        console.error('Error en CONTROLLER ADD RESPONSABLE', error)
        req.status(500).send(SERVER_ERROR);
    } 
}

export const addAtletaJunior = async (req, res) => {
    try {
        const formAtletaJunior = req.body;
        // devuelve un resultado null si algo fallo
        const resultAtletaJrAdded = await atletaSvc.addAtletaJunior(formAtletaJunior);
        
        if (resultResponsableAdded !== null) {
           res.status(200).json({
                success: true,
                resultAtletaJrAdded // devolvemos mensage de la trasaccion realizada ya no habo ningun fallo
           })
        }
        else {
            res.status(500).send(SERVER_ERROR);
        }
        
    } catch (error) {
        console.error('Error en Middleware AddAtletaJunior', error);
        res.status(500).send(SERVER_ERROR);
    }
}
import { SERVER_ERROR } from "../../utils/message-response.js";
import * as adminUsuariosSvc from '../../services/admin/user-atleta-svc.js';

export const findUsuarioaByIdUsuario = async (req, res) => {
    try {
        const idUsuarioBuscar = req.params.idUsuario;
    
        const datosObtenidos = await adminUsuariosSvc.findUsuarioById(idUsuarioBuscar.trim());
        if (datosObtenidos.success === true) {

            return res.status(200).json(datosObtenidos);

        } else {
            return res.status(404).json(datosObtenidos);
        }

    } catch (error) {
        console.error('ERROE EN CONTROLLER BUSCAR ATLETA POR ID USURIO >> ', error)
        return res.status(500).json(SERVER_ERROR);
    }
}

export const findUsuarioByEmail = async (req, res) => {
    try {
        const emailUsuarioBuscar = req.params.email; 
        
        const datosObtenidos = await adminUsuariosSvc.findUsuarioByEmail(emailUsuarioBuscar.trim());
        if (datosObtenidos.success === true) {
            res.status(200).json(datosObtenidos);
        } else {
            res.status(404).json(datosObtenidos);
        }
    } catch (error) {
        console.error('ERROE EN CONTROLLER BUSCAR ATLETA POR EMAIL >> ', error)
        res.status(500).json(SERVER_ERROR);
    }
}

export const findUsuarioByNames = async (req, res) => {
    try {
        const {nombre, apellido} = req.params;
        
        const datosObtenidos = await adminUsuariosSvc.findUsuarioByNames(nombre.trim(), apellido.trim());
        if (datosObtenidos.success === true) {
            res.status(200).json(datosObtenidos);
        } else {
            res.status(404).json(datosObtenidos);
        }
    } catch (error) {
        console.error('ERROE EN CONTROLLER BUSCAR ATLETA POR NOMBRES ', error)
        res.status(500).json(SERVER_ERROR);
    }
}


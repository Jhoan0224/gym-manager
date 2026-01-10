import { SERVER_ERROR } from "../../utils/message-response.js";

export const findUsuarioaByIdUsuario = async (req, res) => {
    try {
        const idBuscar = req.params.idUsuario;
        
        const datosObtenidos = '';
        if (datosObtenidos !== null) {

            res.status(200).json({
                success: true,
                message: 'Datos recuperados',
                data: datosObtenidos
            });

        } else {
            res.status(404).json({
                success: false,
                message: 'No se han datos solicitados',
                data: {}
            });
        }

    } catch (error) {
        console.error('ERROE EN CONTROLLER BUSCAR ATLETA POR NOMBRES ', error)
        res.status(500).json(SERVER_ERROR);
    }
}

export const findUsuarioByEmail = async (req, res) => {
    try {
        const emailBuscar = req.params.email; 
        
        const datosObtenidos = '';
        if (datosObtenidos !== null) {

            res.status(200).json({
                success: true,
                message: 'Datos recuperados',
                data: datosObtenidos
            });

        } else {
            res.status(404).json({
                success: false,
                message: 'No se han datos solicitados',
                data: {}
            });
        }

    } catch (error) {
        console.error('ERROE EN CONTROLLER BUSCAR ATLETA POR EMAIL ', error)
        res.status(500).json(SERVER_ERROR);
    }
}

export const findUsuarioByNames = async (req, res) => {
    try {
        const formBuscar = {
            nombre: req.params.nombre,
            apellido: req.params.apellido,
        }
        
        const datosObtenidos = '';
        if (datosObtenidos !== null) {

            res.status(200).json({
                success: true,
                message: 'Datos recuperados',
                data: datosObtenidos
            });

        } else {
            res.status(404).json({
                success: false,
                message: 'No se han datos solicitados',
                data: {}
            });
        }

    } catch (error) {
        console.error('ERROE EN CONTROLLER BUSCAR ATLETA POR NOMBRES ', error)
        res.status(500).json(SERVER_ERROR);
    }
}


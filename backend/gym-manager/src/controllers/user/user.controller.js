import { SERVER_ERROR } from "../../utils/message-response.js";
import * as userAtletaSvc from '../../services/usuario/user-atleta.service.js'

export const getPerfilUserAtleta = async (req, res ) => {
    const ROLES_ACCESO = ['ATLETA'];
    try {
        const idUsuarioSolicitado = req.params.idUsuario;
        const dataPerfilAtleta = await userAtletaSvc.getPerfiAtleta(idUsuarioSolicitado);

        if (dataPerfilAtleta.success === false) {
            res.status(200).json({
                success: true,
                message: 'Datos encontrados',
                perfilUsuario: dataPerfilAtleta.perfilUsuario
            });

        } else {
            res.status(404).json({
                success: false,
                message: 'No se han encontrado datos',
                perfilUsuario: {}
            })
        }

    } catch (error) {
        res.status(500).json(SERVER_ERROR);
    }
}
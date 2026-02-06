import { SERVER_ERROR } from "../utils/message-response.js"
import * as publicSvc from '../services/public/public-resources.service.js'

export const getListaPlanes = async (req, res) => {
    try {
        const resultService = await publicSvc.listaPlanes();
        
        if (resultService.success === true) {
            return  res.status(200).json(resultService);
        } else {
            
            return res.status(404).json(resultService);
        }

    } catch (error) {
        return res.status(500).json(SERVER_ERROR);
    }
}

export const getListaOfertas = async (req, res) => {
    try {
        const resultService = await publicSvc.listaPlanes();
        
        if (resultService.success === true) {
            return  res.status(200).json(resultService);
        } else {
            
            return res.status(404).json(resultService);
        }

    } catch (error) {
        return res.status(500).json(SERVER_ERROR);
    }
}
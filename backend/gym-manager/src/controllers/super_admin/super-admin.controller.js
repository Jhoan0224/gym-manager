import { SERVER_ERROR } from "../../utils/message-response.js";
import * as superAdminSvc from '../../services/super_admin/super-admin.service.js'
import * as superAdminPostSvc from '../../services/super_admin/super-admin-post.service.js'

export const getListaAdmins = async (req, res) => {
    try {
        const processResult = await superAdminSvc.svcListaAdmins();
        
        if(processResult.success) {
            return res.status(200).json(processResult);
        }
        return res.status(404).json(processResult);
        
    } catch (error) {
        console.error('ERORR IN GET LIST ADMINSs >> ', error);
        return res.status(500).json(SERVER_ERROR);
    }
}

export const getListaPlanes = async (req, res) => {
    try {
        const processResult = await superAdminSvc.svcListaPlanes();
        
        if(processResult.success) {
            return res.status(200).json(processResult);
        }
        return res.status(404).json(processResult);
        
    } catch (error) {
        console.error('ERORR IN GET LIST PLANES >> ', error);

        return res.status(500).json(SERVER_ERROR);
    }
}

export const getListaOfertas = async (req, res) => {
    try {
        const processResult = await superAdminSvc.svcListaOfertas();
        
        if(processResult.success) {
            return res.status(200).json(processResult);
        }
        return res.status(404).json(processResult);
        
    } catch (error) {
        console.error('ERORR IN GET LIST OFERTAS >> ', error);

        return res.status(500).json(SERVER_ERROR);
    }
}


export const getConfigAdminById = async (req, res) => {
    try {
        const idAdmin = req.params.idAdmin;
        const processResult = await superAdminSvc.svcFindAdminById(idAdmin);
        
        if(processResult.success) {
            return res.status(200).json(processResult);
        }
        return res.status(404).json(processResult);
        
    } catch (error) {
                console.error('ERORR IN GET ADMIN INFO >> ', error);
        return res.status(500).json(SERVER_ERROR);
    }
}

export const getConfigPlanById = async (req, res) => {
    try {
        const idPlan = req.params.idPlan;

        const processResult = await superAdminSvc.svcFindPlanById(idPlan);
        
        if(processResult.success) {
            return res.status(200).json(processResult);
        }
        return res.status(404).json(processResult);
        
    } catch (error) {
                        console.error('ERORR IN GET PLAN INFO >> ', error);

        return res.status(500).json(SERVER_ERROR);
    }
}

export const getConfigOfertaById = async (req, res) => {
    try {
        const idOferta = req.params.idOferta;
        const processResult = await superAdminSvc.svcFindOfertaById(idOferta);
        
        if(processResult.success) {
            return res.status(200).json(processResult);
        }
        return res.status(404).json(processResult);
        
    } catch (error) {
                console.error('ERORR IN GET OFERTA INFO >> ', error);

        return res.status(500).json(SERVER_ERROR);
    }
}

export const addNewAdmin = async (req, res) => {
    try {
        const formAddAdmin = req.body;
        // console.log(req.body);
        const processResult = await superAdminPostSvc.svcAddAdmin(formAddAdmin);
        
        if(processResult.success) {
            return res.status(200).json(processResult);
        }
        return res.status(404).json(processResult);
        
    } catch (error) {
        console.error('ERORR IN ADD NEW ADMIN >> ', error);
        return res.status(500).json(SERVER_ERROR);
    }
}

export const updateAdmin = async (req, res) => {
    try {
        const formAddAdmin = req.body;
        // console.log(req.body);
        const processResult = await superAdminPostSvc.svcUpdateAdmin(formAddAdmin);
        
        if(processResult.success) {
            return res.status(200).json(processResult);
        }
        return res.status(404).json(processResult);
        
    } catch (error) {
        console.error('ERORR IN ADD NEW ADMIN >> ', error);
        return res.status(500).json(SERVER_ERROR);
    }
}

export const addNewPlan = async (req, res) => {
    try {
        const formAddAPlan = req.body;

        const processResult = await superAdminPostSvc.svcAddPlan(formAddAPlan);
        
        if(processResult.success) {
            return res.status(200).json(processResult);
        }
        return res.status(404).json(processResult);
        
    } catch (error) {
            console.error('ERORR IN ADD NEW PLAN >> ', error);

        return res.status(500).json(SERVER_ERROR);
    }
}

export const updateOferta = async (req, res) => {
    try {
        const formUpdOferta = req.body;

        const processResult = await superAdminPostSvc.svcUpdateOferta(formUpdOferta);
        
        if(processResult.success) {
            return res.status(200).json(processResult);
        }
        return res.status(404).json(processResult);
        
    } catch (error) {
            console.error('ERORR IN ADD NEW PLAN >> ', error);

        return res.status(500).json(SERVER_ERROR);
    }
};

export const updatePlan = async (req, res) => {
    try {
        const formUpdPlan = req.body;

        const processResult = await superAdminPostSvc.svcUpdatePlan(formUpdPlan);
        
        if(processResult.success) {
            return res.status(200).json(processResult);
        }
        return res.status(404).json(processResult);
        
    } catch (error) {
            console.error('ERORR IN ADD NEW PLAN >> ', error);

        return res.status(500).json(SERVER_ERROR);
    }
};

export const addNewOferta = async (req, res) => {
    try {
        const formAddOferta = req.body;

        const processResult = await superAdminPostSvc.svcAddOferta(formAddOferta);
        
        if(processResult.success) {
            return res.status(200).json(processResult);
        }
        return res.status(404).json(processResult);
        
    } catch (error) {
        console.error('ERORR IN ADD NEW OFERTA >> ', error);

        return res.status(500).json(SERVER_ERROR);
    }
}


export const deleteAdmin = async (req, res) => {
    try {
        const idAdmin = req.params.idAdmin;

        const processResult = await superAdminPostSvc.svcDeleteAdmin(idAdmin);
        
        if(processResult.success) {
            return res.status(200).json(processResult);
        }
        return res.status(404).json(processResult);
        
    } catch (error) {
        console.error('ERROR IN DELETE ADMIN >> ', error);
        return res.status(500).json(SERVER_ERROR);
    }
}

export const deletePlan = async (req, res) => {
    try {
        const idPlan = req.params.idPlan;

        const processResult = await superAdminPostSvc.svcDeletePlan(idPlan);
        
        if(processResult.success) {
            return res.status(200).json(processResult);
        }
        return res.status(404).json(processResult);
        
    } catch (error) {
        return res.status(500).json(SERVER_ERROR);
    }
}

export const deleteOferta = async (req, res) => {
    try {
        const idOferta = req.params.idOferta;

        const processResult = await superAdminPostSvc.svcDeleteOferta(idOferta);
        
        if(processResult.success) {
            return res.status(200).json(processResult);
        }
        return res.status(404).json(processResult);
        
    } catch (error) {
        return res.status(500).json(SERVER_ERROR);
    }
}


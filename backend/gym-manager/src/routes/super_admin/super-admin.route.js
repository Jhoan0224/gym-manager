import express from "express";
import * as authProcess from '../../middleware/auth.middleware.js';
import * as superAdminCtrl from '../../controllers/super_admin/super-admin.controller.js';

const superAdminApp = express.Router();
superAdminApp.use(express.json());

superAdminApp.get('/lista-admins',
    authProcess.authProcess,
    superAdminCtrl.getListaAdmins
);

superAdminApp.get('/config-admin/:idAdmin',
    authProcess.authProcess,
    superAdminCtrl.getConfigAdminById
);

superAdminApp.get('/lista-planes',
    authProcess.authProcess,
    superAdminCtrl.getListaPlanes
);

superAdminApp.get('/config-plan/:idPlan',
    authProcess.authProcess,
    superAdminCtrl.getConfigPlanById
);

superAdminApp.get('/lista-ofertas',
    authProcess.authProcess,
    superAdminCtrl.getListaOfertas
);

superAdminApp.get('/config-oferta/:idOferta',
    authProcess.authProcess,
    superAdminCtrl.getConfigOfertaById
);


superAdminApp.post('/add-admin',
    authProcess.authProcess,
    superAdminCtrl.addNewAdmin  
);

superAdminApp.post('/add-plan',
    authProcess.authProcess,
    superAdminCtrl.addNewPlan 
);

superAdminApp.post('/add-oferta',
    authProcess.authProcess,
    superAdminCtrl.addNewOferta 
);


superAdminApp.post('/update-admin-data',
    authProcess.authProcess,
    superAdminCtrl.updateAdmin 
);

superAdminApp.post('/update-plan',
    authProcess.authProcess,
    superAdminCtrl.updatePlan 
);

superAdminApp.post('/update-oferta',
    authProcess.authProcess,
    superAdminCtrl.updateOferta 
);

superAdminApp.delete('/delete-admin/:idAdmin',
    authProcess.authProcess,
    superAdminCtrl.deleteAdmin 
);

superAdminApp.delete('/delete-plan/:idPlan',
    authProcess.authProcess,
    superAdminCtrl.deletePlan 
);

superAdminApp.delete('/delete-oferta/:idOferta',
    authProcess.authProcess,
    superAdminCtrl.deleteOferta 
);



export {superAdminApp};
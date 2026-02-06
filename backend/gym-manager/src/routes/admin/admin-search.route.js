import express from "express";
import { authProcess } from "../../middleware/auth.middleware.js";
import * as AdminSearchCtrl from '../../controllers/admin/admin-search.controller.js';

const adminSearchApp = express.Router();
adminSearchApp.use(express.json());


adminSearchApp.get('/find-usuario/nombre/:nombre?/apellido/:apellido?',
    // authProcess,
    AdminSearchCtrl.findUsuarioByNames
)

adminSearchApp.get('/find-usuario/email/:email',
    // authProcess,
    AdminSearchCtrl.findUsuarioByEmail
)

adminSearchApp.get('/find-usuario/id/:idUsuario',
    // authProcess,
    AdminSearchCtrl.findUsuarioaByIdUsuario
)

export {adminSearchApp};
import express from 'express'
import { authProcess } from '../../middleware/auth.middleware.js';
import * as validations from '../../middleware/validar-forms.middleware.js'
import * as AdminUsersCtrl from '../../controllers/admin/admin-users.controller.js';

// controller set config
const adminUsersApp = express.Router();
adminUsersApp.use(express.json());

// controllers
// endpoints for Read data

adminUsersApp.get('/perfil-usuario/id/:idUsuario',
    authProcess,
    AdminUsersCtrl.getPerfilAtleta // it's the controller
);

// endpoint for Add or Modify data
adminUsersApp.post('/add-atleta',
    authProcess,
    validations.formAtleta,
    AdminUsersCtrl.addAtleta
)

adminUsersApp.post('/add-responsable',
    authProcess,
    validations.formResponsable,
    AdminUsersCtrl.addResponsable
)

adminUsersApp.post('/add-atleta-junior',
    authProcess,
    validations.formAtletaJunior,
    AdminUsersCtrl.addAtletaJunior
)

adminUsersApp.post('/pago-user-local',
    authProcess,
    validations.formPagoUserLocal,
    AdminUsersCtrl.realizarPagoUserSuscripcionLocal
);
// pendientes delete userr by id y update user by id

export {adminUsersApp};

// adminApp.get('/perfil-usuario/id/:idUsuario', async (req, res) => {

//     const token = req.headers.authorization;
//     res.send(await perfilUsuario(req.params.idUsuario, token));
// })
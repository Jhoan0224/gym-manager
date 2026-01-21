import express from 'express';
import { authProcess } from "../../middleware/auth.middleware.js";
import * as userAccountCrtl from '../../controllers/user/user.controller.js';

const userAccountApp = express.Router();
userAccountApp.use(express.json());

userAccountApp.get("/perfil-usuario/id/:idUsuario",
    authProcess,
    userAccountCrtl.getPerfilUserAtleta
)

userAccountApp.get('/suscripcion-usuario/id/:idUsuario',
    // authProcess,
    userAccountCrtl.getSuscripcionUserInfo
)

userAccountApp.get('/lista-entrenos-usuario/id/:idUsuario',
    // authProcess,
    userAccountCrtl.getListaEntrenosUser
)

userAccountApp.post('/update-user', (req, res) => {
    // authProcess,
    userAccountCrtl.updateUserData
})

userAccountApp.post('/delete-user', (req, res) => {

})


export {userAccountApp};
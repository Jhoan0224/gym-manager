import express from 'express';
import { authProcess } from "../../middleware/auth.middleware.js";
import * as userAccountCrtl from '../../controllers/user/user.controller.js';

var adminApp = express.Router();
adminApp.use(express.json());

adminApp.get("/user-profile/:idUsuario",
    authProcess,
    userAccountCrtl.getPerfilUserAtleta
)

adminApp.post('/update-user', (req, res) => {

})

adminApp.post('/delete-user', (req, res) => {

})


export {adminApp};
import express from 'express';
import * as authProcess from '../middleware/auth.middleware.js'
import * as authCtrl from '../controllers/auth.controller.js'

var authApp = express.Router();
authApp.use(express.json());

authApp.post('/admin/login',
    authProcess.getAuthFormCheck,
    authCtrl.getAdminJWT
);


authApp.post('/user/login', async (req, res) => {

    res.json({token: 'working...'});
})

authApp.post('/validar-token', async (req, res) => {
   
    res.json({token: 'working...'}); 
})

authApp.post('/user/verify-profile', async (req, res) => {
    
    res.send('I AM WORKING')
})

export {authApp};
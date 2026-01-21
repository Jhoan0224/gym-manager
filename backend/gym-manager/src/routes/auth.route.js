import express from 'express';
import * as authProcess from '../middleware/auth.middleware.js'
import * as authCtrl from '../controllers/auth.controller.js'

const authApp = express.Router();
authApp.use(express.json());

authApp.post('/admin/login',
    authProcess.getAuthFormCheck,
    authCtrl.getAdminJWT
);

authApp.post('/user/login',
    authProcess.getAuthFormCheck,
    authCtrl.getUserJWT
)

authApp.get('/user-validar-token',
    authCtrl.validateToken,
)

authApp.get('/admin-validar-token',
    authCtrl.validateTokenAdmin
)

authApp.post('/user/verify-profile', async (req, res) => {
    
    res.send('I AM WORKING')
})

export {authApp};
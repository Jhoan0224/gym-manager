import express from 'express';
import { adminAuthentication } from '../services/auth/auth-service.js';


var authApp = express.Router();
authApp.use(express.json());

authApp.post('/admin/login', async (req, res) => {

    const authProcess = await adminAuthentication(req.body);
    res.json({token: authProcess});
})

authApp.post('/user/login', async (req, res) => {

    const authProcess = await adminAuthentication(req.body);
    res.json({token: authProcess});
})

authApp.post('/user/verify-profile', async (req, res) => {
    res.send('I AM WORKING')
})

export {authApp};
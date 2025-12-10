import express from 'express';
import { AddUserService } from '../services/admin/admin-user.js';

var adminApp = express.Router();
adminApp.use(express.json());

adminApp.post('/add-user', (req, res) => {
    AddUserService(req.body);
})

adminApp.post('/update-user', (req, res) => {

})

adminApp.post('/delete-user', (req, res) => {

})

adminApp.get("/users/:idUser", (req, res) => {
    
})



export {adminApp};
import express from 'express';
import jwt from 'jsonwebtoken';

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


adminApp.get("/", (req, res) => {
    res.json({helo: 'helo'})
})


// const secretKey = 'myjwtkey';

const secretKey = 'secret';

let data = {
    time: Date.now(),
    userId: 12,
}
let options = {
     algorithm: 'HS512', expiresIn: '1h'
}
adminApp.get('/login', (req, res) => {

    const token = jwt.sign(data, secretKey, options);

   res.send(token);

})

adminApp.post('/jwt', (req, res ) => {

    let token = req.headers.authorization;
    console.log(token)
    let ttoken = token.toString().split(' ')[1];
    
let decode =     jwt.verify(ttoken, secretKey, (err, decode) => {
    if(err) {
        res.send("no aceptado")
        console.log(err)
        
    } else {
        
        res.send("aceptado")
        console.log(decode)
    }
})
})



export {adminApp};
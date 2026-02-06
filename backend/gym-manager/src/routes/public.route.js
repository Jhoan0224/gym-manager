import express from "express";
import * as publicApiCtrl from '../controllers/public-data.controller.js';

const publicApp = express.Router();
publicApp.use(express.json());

publicApp.get('/lista-planes',
    publicApiCtrl.getListaPlanes
);

publicApp.get('/lista-ofertas',
    publicApiCtrl.getListaOfertas
);

export {publicApp};
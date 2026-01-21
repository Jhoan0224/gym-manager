import * as validarForm from "../utils/validaciones/validar-form-usuario.js"
import { SERVER_ERROR } from "../utils/message-response.js";

// VALIDACIONES DE FORMULACION EN EL MIDDLEWARE

export const formAtleta = (req, res, next) => {
    try {
        const formAtleta = req.body;
        // validationResult es un json y contiene un booleano isValid y un String message
        const validationResult = validarForm.usuarioAtleta(formAtleta);

        if (validationResult.success === true) {
            // if the validation is true, go to the next layer, in this case is the Controller
            next(); 
        } else {
            res.status(400).json({
                ...validationResult,
                data: {}
            });
        }
    } catch (error) {
        console.error('ERROR DENTRO DE MIDDLEWARE VALIDADCION DE FORM-ATLETA >> ', error)
        res.status(500).json(SERVER_ERROR);
    }
}

export const formResponsable = (req, res, next) => {
    const REQUEST_RESPONSE = {
        success: '',
        message: '',
        data: {}
    }
    try {
        const formAtletaResponsable = req.body;
        // validationResult es un json y contiene un booleano isValid y un String message
        const validationResult = validarForm.usuarioResponsable(formAtletaResponsable);

        if (validationResult.isValid === true) {
            // if the validation is true, go to the next layer, in this case is the Controller
            next(); 
        } else {
            res.status(400).json({
                success: false,
                message: validationResult.message,
                data: {}
            });
        }
    } catch (error) {
        console.error('ERROR DENTRO DE MIDDLEWARE VALIDADCION DE FORM-RESPONSABLE >> ', error)
        res.status(500).json(SERVER_ERROR);
    }
} 

export const formAtletaJunior = (req, res, next) => {
    const REQUEST_RESPONSE = {
        success: '',
        message: '',
        data: {}
    }
    try {
        const formAtletaJunior = req.body;
        // validationResult es un json y contiene un booleano isValid y un String message
        const validationResult = validarForm.usuarioAtletaJunior(formAtletaJunior);

        if (validationResult.isValid === true) {
            // if the validation is true, go to the next layer, in this case is the Controller
            next(); 
        } else {
            res.status(400).json({
                success: false,
                message: validationResult.message,
                data: {}
            });
        }
    } catch (error) {
        console.error('ERROR DENTRO DE MIDDLEWARE VALIDADCION DE FORM-ATLETA-JUNIOR >> ', error)
        res.status(500).json(SERVER_ERROR);
    }
}
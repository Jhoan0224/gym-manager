import { SERVER_ERROR, VALIDATION_FAILED } from "../utils/message-response.js";
import { verifyJWT } from "../config/security/auth-config.js"
import { validarFormLogin } from "../utils/validaciones/validar-form-auth.js";

export const authProcess = async (req, res, next) => {
    try {
        const tokenAuth = req.headers.authorization;
        const decodedToken = verifyJWT(tokenAuth);

        if (decodedToken !== null) {
            // if token is valid, will add roles to userData
            req.userData = {
                idUsuarioToken: decodedToken.idUsuario,
                roles: decodedToken.roles
            }
            // go to next layer in the router
            next(); 

        } else {
            // send Token Not Valid if the verification is failed
            res.status(401).send('El Token no es valido');
        }

    } catch (error) {
        // send Internal Server Error if something goes wrong on the server
        console.error(error)
        res.status(500).json(SERVER_ERROR);
    }
}

export const getAuthFormCheck = async (req, res, next) => {
    try {
        const formLogin = req.body;

        const formLoginIsValid = validarFormLogin(formLogin); 
        
        if (formLoginIsValid) {
            return next();
        } else {
            return res.status(400).json(VALIDATION_FAILED);
        }
    } catch (error) {
        return res.status(500).json(SERVER_ERROR);
    }
}
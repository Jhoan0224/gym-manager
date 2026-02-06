import { SERVER_ERROR, UNAUTHORIZED, VALIDATION_FAILED } from "../utils/message-response.js";
import { generarTokenSuperAdmin, generarTokenAdmin, generarTokenUser, validarToken } from "../services/security-svc/auth-admin.service.js";

export const validarRolesAcceso = async (req, res) => {
    // const ROLES_VALIDATION = ['ATLETA', 'ADMIN'];
    const ROLES_VALIDATION = ['ATLETA'];
    try {
        const rolesCheck = req.userData.roles;
        console.log('DEBUG ROLES HEADERS >> ', req.userData)
        // debug
        console.log('PRINT ROLES :>> ', rolesCheck);

        const rolesIsValid = ROLES_VALIDATION.every(rol => rolesCheck.includes(rol));
        
        if (rolesIsValid === true) {
            return res.status(200).json({message: 'ALL IS GOOD'});
        } else {
            return res.status(401).json(UNAUTHORIZED);
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json(SERVER_ERROR);
    }
};


export const validateToken = async (req, res) => {
    try {
        const token = req.headers.authorization;
        
        const tokenValidationResult = await validarToken(token);
        if (tokenValidationResult.success === true) {
            // el retorno incluye success: boolean, message:
            return res.status(200).json(tokenValidationResult);
            
        } else {
            return res.status(401).json(tokenValidationResult);
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json(SERVER_ERROR);
    }
};

export const validateTokenAdmin = async (req, res) => {
    const ROLES_VALIDATION = ['ADMIN'];
    try {
        const token = req.headers.authorization;

        // const rolesIsValid = ROLES_VALIDATION.every(rol => token.roles.include(rol));
        // if (rolesIsValid === false) {
        //     return res.status(401).json(UNAUTHORIZED);
        // }
        
        const tokenValidationResult = await validarToken(token);
        
        if (tokenValidationResult.success === true) {
            // el retorno incluye success: boolean, message:
            return res.status(200).json(tokenValidationResult);
            
        } else {
            return res.status(401).json(tokenValidationResult);
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json(SERVER_ERROR);
    }
};

export const validateTokenSuperAdmin = async (req, res) => {
    const ROLES_VALIDATION = ['ADMIN'];
    try {
        const token = req.headers.authorization;

        // const rolesIsValid = ROLES_VALIDATION.every(rol => token.roles.include(rol));
        // if (rolesIsValid === false) {
        //     return res.status(401).json(UNAUTHORIZED);
        // }
        
        const tokenValidationResult = await validarToken(token);
        
        if (tokenValidationResult.success === true) {
            // el retorno incluye success: boolean, message:
            return res.status(200).json(tokenValidationResult);
            
        } else {
            return res.status(401).json(tokenValidationResult);
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json(SERVER_ERROR);
    }
};

export const getSuperAdminJWT = async (req, res) => {
    try {
        const formLogin = req.body;
        const resultGenerateToken = await generarTokenSuperAdmin(formLogin);
        
        if (resultGenerateToken.success === true) {
            // el retorno incluye success: boolean, message: y token:
            return res.status(200).json(resultGenerateToken)
            
        } else {
            return res.status(401).json(resultGenerateToken);
        }
    } catch (error) {
        console.error(error)
        return res.status(500).json(SERVER_ERROR);
    }
};

export const getAdminJWT = async (req, res) => {
    try {
        const formLogin = req.body;
        const resultGenerateToken = await generarTokenAdmin(formLogin);
        
        if (resultGenerateToken.success === true) {
            // el retorno incluye success: boolean, message: y token:
            return res.status(200).json(resultGenerateToken)
            
        } else {
            return res.status(401).json(resultGenerateToken);
        }
    } catch (error) {
        console.error(error)
        return res.status(500).json(SERVER_ERROR);
    }
};

export const getUserJWT = async (req, res) => {
    try {
        const formLogin = req.body;
        const resultGenerateToken = await generarTokenUser(formLogin);

        if (resultGenerateToken.success === true) {
            // el retorno incluye success: boolean, message: y toke:
            res.status(200).json(resultGenerateToken)
            
        } else {
            res.status(400).json(resultGenerateToken);
        }
    } catch (error) {
        console.error(error)
        res.status(500).json(SERVER_ERROR);
    }
};
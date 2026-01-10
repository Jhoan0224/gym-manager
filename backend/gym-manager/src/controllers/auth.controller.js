import { SERVER_ERROR, VALIDATION_FAILED } from "../utils/message-response.js";
import { generarTokenAdmin, generarTokenUser } from "../services/security-svc/auth-admin.service.js";

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
}

export const getUserJWT = async (req, res) => {
    try {
        const formLogin = req.body;
        const resultGenerateToken = await generarTokenUser(formLogin);

        if (resultGenerateToken.success === true) {
            // el retorno incluye success: boolean, message: y toke:
            res.status(200).json(resultGenerateToken)
            
        } else {
            res.status(400).json(VALIDATION_FAILED);
        }
    } catch (error) {
        res.status(500).json(SERVER_ERROR);
    }
}
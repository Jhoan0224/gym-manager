import jwt from 'jsonwebtoken';

const KEY_JTW = 'secret';

// funcion para generar el token
export function generateJWT(userDataToken) {
    
    const payload = {
        idUsuario: userDataToken.idUser,
        roles: [...userDataToken.roles],
    }
    const options = {
        expiresIn: '30min'
    }
    
    return jwt.sign(payload, KEY_JTW, options);
}

// funcion para verficar valides del token, si es valido retornara el token decodicado
export function verifyJWT(tokenAuth) {
    try {
        const token = tokenAuth.split(' ')[1]; 
        const decoded = jwt.verify(token, KEY_JTW);
        return decoded;

    } catch (error) {
        console.log("Error in token's decodfication ", error)
        return null;
    }
}
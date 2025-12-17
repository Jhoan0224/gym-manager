import jwt from 'jsonwebtoken';

const singKeyJWT = 'secret';

export function generateJWT(userDataToken) {
    
    let payload = {
        idUser: userDataToken.idUser,
        roles: [...userDataToken.roles],
        iat: Date.now(),
    }

    let options = {
        expiresIn: '30min'
    }

    try {
        return jwt.sign(payload, singKeyJWT, options);
    } catch (error) {
        return null;
    }
}   

export function verifyJWT(token) {

    jwt.verify(token, singKeyJWT, (err, decode) => {
        if(err) {
            console.log(err);
            return null;

        } else {
            return decode;
        }
        
    })


}
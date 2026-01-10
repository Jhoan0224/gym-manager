import bcrypt from 'bcrypt';

const saltRouds = 10;

export function generatePassHash(passPlainText) {
    try {
        const passHash = bcrypt.hash(passPlainText, saltRouds);
        return passHash;

    } catch (error) {
        console.log(error);
        return null;
    }
}

export function comparePassHash(passPlainText, passHash) {
    try {
        const matchResult = bcrypt.compareSync(passPlainText, passHash);
        return matchResult;
        
    } catch (error) {
        console.log(error)
        return false;
    }
}


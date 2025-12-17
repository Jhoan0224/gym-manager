import bcrypt from 'bcrypt';

const saltRouds = 10;

function generatePassHash(passPlainText) {
    try {
        const passHash = bcrypt.hash(passPlainText, saltRouds);
        return passHash;

    } catch (error) {
        console.log(error);
        return null;
    }
}

function comparePassHash(passPlainText, passHash) {
    try {
        const matchResult = bcrypt.compareSync(passPlainText, passHash);
        return matchResult;
        
    } catch (error) {
        console.log(error)
        return false;
    }
}
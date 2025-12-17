import { mysqlConnection } from "../../database/db-connect.js";
import { ADMIN_LOGIN_STMT, ADMIN_ROLES_STMT, USER_LOGIN_STMT, USER_ROLES_STMT } from "../../database/queries-sql.js";
import { generateJWT } from "../../security/Auth.js";

export async function adminAuthentication(adminLogin) {

    try {
        const valuesLogin = [adminLogin.email, adminLogin.pass];

        const connection = await mysqlConnection();
        const [rowsLogin] = await connection.execute(ADMIN_LOGIN_STMT, valuesLogin);
        const idAdmin = rowsLogin[0]?.idAdmin ?? null;

        if (idAdmin !== null) {

            const [rowsRoles] = await connection.execute(ADMIN_ROLES_STMT, [idAdmin]);
            const userDataToken = {
                idUser: idAdmin,
                roles: [rowsRoles.map(r => r.rol)]
            }

            connection.end();
            return generateJWT(userDataToken); 

        } else {
            connection.end();
            return null;
        }

    } catch (error) {
        
        console.log('error :>> ', error);
        return null;
    }
}

export async function userAuthenticatio(userLogin) {
    try {
        const valuesLogin = [userLogin.email, userLogin.pass];

        const connection = await mysqlConnection();
        const [rowsLogin] = await connection.execute(USER_LOGIN_STMT, valuesLogin);
        const idUser = rowsLogin[0]?.idUser ?? null;
        
        if (idUser !== null) {
            const [rowsRoles] = await connection.execute(USER_ROLES_STMT, [idUser]);
            const userDataToken = {
                idUser: idUser,
                roles: [rowsRoles.map(r => r.rol)]
            }

            connection.end();
            return generateJWT(userDataToken);    
        }

    } catch (error) {

        console.log('error :>> ', error);
        return null;  
    }
}


export const ADMIN_LOGIN_STMT = `
    SELECT admin.id_admin AS idAdmin FROM admin
    WHERE admin.email = ? AND admin.pass = ?
    LIMIT 1
`;

export const ADMIN_ROLES_STMT = `
    SELECT r.nombre AS rol FROM admin adm
    JOIN rol r
        on r.id_rol = adm.id_rol
    WHERE adm.id_admin = ?
`;

// user queries
export const USER_LOGIN_STMT = `
    SELECT user.id_user as idUser from user
    WHERE user.email = ? AND user.pass = ?
    LIMIT 1
`;

export const USER_ROLES_STMT = `
    SELECT r.nombre AS rol FROM user usr
    JOIN rol r
        on r.id_rol = usr.id_rol
    WHERE usr.id_user = ?
`;
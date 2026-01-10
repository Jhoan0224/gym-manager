
// Admin quieries
export const ID_ADMIN_BY_LOGIN = `
    SELECT admin.id_admin AS idAdmin
    FROM admin
    WHERE admin.email = ? AND admin.pass = ?
    LIMIT 1
`; 

export const ADMIN_ROLES_BY_ID_ADMIN = `
    SELECT rol.nombre AS rol
    FROM rol
    JOIN rol_admin rd
        on rd.id_rol = rol.id_rol
    WHERE rd.id_admin = ?
`;

// Usuario queries
export const ID_USUARIO_BY_LOGIN = `
    SELECT usr.id_usuario as idUsuario
    FROM usuario usr
    WHERE usr.email = ? AND usr.pass_hash = ?
    LIMIT 1
`; 
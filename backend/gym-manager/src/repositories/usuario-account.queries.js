
export const GET_PERFIL_USUARIO = `
    SELECT usr.id_usuario, usr.nombre, usr.apellido, usr.fecha_nacimiento,
        usr.dui, usr.telefono, usr.email, tusr.nombre as tipo_usuario, p.nombre as plan
    FROM usuario usr
    JOIN plan p
        on p.id_plan = usr.id_plan
    JOIN tipo_usuario tusr
        on tusr.id_tipo_usuario = usr.id_tipo_usuario
    WHERE usr.id_usuario = ?
    LIMIT 1
`;



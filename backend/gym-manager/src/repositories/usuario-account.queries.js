
export const UPDATE_USER_INFO = `
    UPDATE usuario
    SET nombre = ?, peso = ?, telefono = ?, email = ?
    WHERE
    usuario.id_usuario = ?
`;

export const GET_LISTA_ENTRENOS_USER = `
    SELECT user_entreno.id_usuario_historial_entreno, user_entreno.tiempo_entreno,
        user_entreno.etiqueta_entreno
    FROM
        usuario_historial_entreno user_entreno
    WHERE
        user_entreno.id_usuario = ?
    LIMIT 1
`;

export const GET_SUSCRIPCION_USER_INFO = `
    SELECT susc_user.id_suscripcion_usuario, susc_user.activa as estado,
        susc_user.fechaInicio , susc_user.fechaFinalizacion, p.precio
    FROM suscripcion_usuario susc_user
    JOIN plan p
        on p.id_plan = susc_user.id_plan
    WHERE
        susc_user.id_usuario = ?
    LIMIT 1
`;

export const GET_MAIN_USER_INFO = `
    SELECT usr.id_usuario, usr.nombre, usr.apellido, usr.email, rolusr.nombre as tipo_usuario
    FROM usuario usr
    JOIN
        relacion_rol_usuario relrolusr
            on relrolusr.id_usuario = usr.id_usuario
    JOIN 
        rol_usuario rolusr
        on rolusr.id_rol_usuario = relrolusr.id_rol_usuario
    WHERE
        usr.id_usuario = ?
    LIMIT 1
`;

export const GET_USER_SUSCRIPCION_PAGOS = `
    SELECT susc_pago.id_suscripcion_pago, susc_pago.fecha_hora_pago, susc_pago.monto_total, 
        mtd_pago.nombre as metodo_pago
    FROM 
        suscripcion_pago susc_pago
    JOIN 
        metodo_pago mtd_pago 
        on mtd_pago.id_metodo_pago = susc_pago.id_metodo_pago
    WHERE 
        susc_pago.id_suscripcion_usuario = ?
    LIMIT 1
`;

export const GET_PERFIL_USUARIO = `
    SELECT usr.id_usuario, usr.nombre, usr.apellido, usr.fecha_nacimiento,
        usr.dui, usr.telefono, usr.email, rolusr.nombre as tipo_usuario, p.nombre as plan
    FROM usuario usr
    JOIN plan p
        on p.id_plan = usr.id_plan
    JOIN
        relacion_rol_usuario relrolusr
            on relrolusr.id_usuario = usr.id_usuario
    JOIN rol_usuario rolusr
        on rolusr.id_rol_usuario = relrolusr.id_rol_usuario
    WHERE usr.id_usuario = ?
    LIMIT 1
`;

export const FIND_USER_RESPONSABLE_EMAIL_DUI = `
    SELECT usr.id_usuario as idUsuario
    FROM usuario usr
    WHERE usr.email = ? AND usr.dui = ?
    LIMIT 1
`;

export const FIND_USER_EMAIL = `
    SELECT usr.id_usuario as idUsuario
    FROM usuario usr
    WHERE usr.email = ?
    LIMIT 1
`;

export const FIND_USER_DUI = `
    SELECT usr.id_usuario as idUsuario
    FROM usuario usr
    WHERE usr.dui = ?
    LIMIT 1
`;


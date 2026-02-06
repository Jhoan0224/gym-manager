export const GET_LIST_ADMINS = `
    SELECT 
        admin.id_admin, admin.nombre, admin.apellido, admin.email
    FROM 
        admin
`;

export const GET_LIST_PLANES = `
    SELECT 
        p.id_plan, p.nombre, p.descripcion, p.precio
    FROM 
        plan p
`;

export const GET_LIST_OFERTAS = `
    SELECT 
        oft.id_oferta, oft.nombre, oft.descripcion, oft.descuento,
        oft.fecha_inicio as fechaInicio, oft.fecha_finalizacion as fechaFinalizacion  
    FROM 
        oferta oft
`;



export const ADD_ROLES_ADMIN_BY_ID = `
    INSERT INTO rol_admin(id_admin, id_rol)
    VALUES (?, ?)
`;

export const FIND_ADMIN_BY_ID = `
    SELECT 
        admin.id_admin, admin.nombre, admin.apellido, admin.email
    FROM 
        admin
    WHERE admin.id_admin = ?
`;

export const FIND_PlAN_BY_ID = `
    SELECT 
        p.id_plan, p.nombre, p.descripcion, p.precio
    FROM 
        plan p
    WHERE
        p.id_plan = ?
`;

export const FIND_OFERTA_BY_ID = `
    SELECT 
        oft.id_oferta, oft.nombre, oft.descripcion, oft.descuento,
        oft.fecha_inicio as fechaInicio, oft.fecha_finalizacion as fechaFinalizacion
    FROM 
        oferta oft
    WHERE
        oft.id_oferta = ?
`;


export const CREATE_ADMIN = `
    INSERT INTO admin(nombre, apellido, fecha_nacimiento, dui, telefono)
    VALUES(?, ?, ?, ?, ?)
`; 

export const CREATE_PLAN = `
    INSERT INTO
        plan(nombre, descripcion, precio, num_meses)
    VALUES(?, ?, ?, ?)
`;

export const CREATE_OFERTA = `
    INSERT INTO
        oferta(nombre, descripcion, descuento, fecha_inicio, fecha_finalizacion)
    VALUES(?, ?, ?, ?, ?)
`; 

export const DELETE_ADMIN_BY_ID = `
    DELETE FROM
        admin
    WHERE
        admin.id_admin = ?
`; 

export const DELETE_PLAN_BY_ID = `
    DELETE FROM
        plan
    WHERE
        plan.id_plan = ?
`; 

export const DELETE_OFERTA_BY_ID = `
    DELETE FROM
        oferta
    WHERE
        oferta.id_oferta = ?
`; 

export const UPDATE_ADMIN_BY_ID = `
    UPDATE admin
        SET admin.nombre = ?, admin.apellido = ?, admin.telefono = ?, admin.dui = ?
    WHERE
        admin.id_admin = ?
`;

export const UPDATE_PLAN_BY_ID = `
    UPDATE plan
        SET plan.nombre = ?, plan.descripcion = ? , plan.precio = ?, plan.num_meses = ?
    WHERE
        plan.id_plan = ?
`;
export const UPDATE_OFERTA_BY_ID = `
    UPDATE oferta
        SET oferta.nombre = ?, oferta.descripcion = ? , oferta.descuento = ?, oferta.fecha_inicio = ?, oferta.fecha_finalizacion = ?
    WHERE
        oferta.id_oferta = ?
`;

export const FIND_USUARIO_BY_EMAIL = `
    SELECT usr.id_usuario, usr.nombre, usr.apellido, usr.email, p.nombre as plan
    FROM usuario usr
    JOIN plan p 
        on p.id_plan = usr.id_plan 
    WHERE usr.email = ?
`;
export const FIND_USUARIO_BY_NAMES = `
    SELECT usr.id_usuario, usr.nombre, usr.apellido, usr.email, p.nombre as plan
    FROM usuario usr
    JOIN plan p 
        on p.id_plan = usr.id_plan 
    WHERE usr.nombre = ? AND usr.apellido = ?
`;
export const FIND_USUARIO_BY_ID = `
    SELECT usr.id_usuario, usr.nombre, usr.apellido, usr.email, p.nombre as plan
    FROM usuario usr
    JOIN plan p 
        on p.id_plan = usr.id_plan 
    WHERE usr.id_usuario = ?
`;

export const ADD_USUARIO_ATLETA = `
    INSERT INTO
    usuario (nombre, apellido, fecha_nacimiento, genero, peso,
        dui, telefono, email, pass_hash, id_tipo_usuario, id_plan)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`;

export const ADD_USUARIO_RESPONSABLE = `
    INSERT INTO 
    usuario(nombre, apellido, fecha_nacimiento, genero, dui, telefono, email, pass_hash, id_tipo_usuario)
    VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)
`;

export const ADD_USUARIO_ATLETA_JUNIOR = `
    INSERT INTO
    usuario(nombre, apellido, fecha_nacimiento, genero, peso, id_tipo_usuario, id_plan)
    VALUES(?, ?, ?, ?, ?, ?, ?)
`;

export const Add_RELACION_RESPONSABLE_ATLETAJR = `
    INSERT INTO
    usuario_responsable_atleta_junior(id_usuario_responsable, id_usuario_atleta_junior)
    VALUES (?, ?)
`;


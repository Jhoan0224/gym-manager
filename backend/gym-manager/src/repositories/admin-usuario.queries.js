

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


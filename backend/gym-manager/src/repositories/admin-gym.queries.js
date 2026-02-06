
export const GET_PLAN_BY_ID = `
    SELECT plan.id_plan as idPlan, plan.nombre, plan.precio, plan.num_meses as numMeses
    FROM plan
    WHERE plan.idPlan = ?
    LIMIT 1        
`;

export const CREATE_SUSCRIPCION_USUARIO = `
    INSERT INTO 
        suscripcion_usuario(fechaInicio, fechaFinalizacion, id_plan, id_usuario)
    VALUES (?, ?, ?, ?)
`;

export const CREATE_SUSCRIPCION_PAGO = `
    INSERT INTO 
        suscripcion_pago(monto_inicial, descuento, monto_total, id_metodo_pago, id_suscripcion_usuario)
    VALUES (?, ?, ?, ?, ?)
`;

export const GET_SUSCRIPCION_USER_INFO_BY_ID = `
    SELECT 
        u.email, su.fechaInicio, su.fechaFinalizacion, su.monto_total as montoTotal, p.nombre as plan,
        sp.monto_inicial, sp.descuento, sp.monto_total, sp.fecha_hora_pago, mp.nombre as metodoPago
    FROM 
        suscripcion_usuario su
    JOIN
        usuario u
        on u.id_usuario = su.id_usuario
    JOIN
        suscripcion_pago sp
        on sp.id_usuario = su.id_usuario
    JOIN
        plan p
        on p.id_plan = su.id_plan
    JOIN
        metodo_pago mp
        on mp.id_metodo_pago = su.id_metodo_pago
    WHERE
        su.id_suscripcion_pago = ?
    LIMIT 1
`;
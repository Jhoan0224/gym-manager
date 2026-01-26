-- create database gym_manager_db;
-- use gym_manager_db;

-- usuarios tables
create table plan(
	id_plan int auto_increment primary key,
	nombre varchar(50),
	precio decimal(4, 2),
	num_meses int
);
create table rol_usuario(
	id_rol_usuario int auto_increment primary key,
	nombre varchar(50)
);

alter table rol_usuario rename column id_tipo_usuario to id_rol_usuario;

create table usuario(
	id_usuario int auto_increment primary key,
	nombre varchar(50),
	apellido varchar(50),
	fecha_nacimiento date,
	peso varchar(10),
	genero varchar(20),
	dui varchar(20),
	telefono varchar(15),
	email varchar(256),
	pass_hash varchar(256),
	id_plan int,
	constraint fk_Usuario_Plan foreign key (id_plan) references plan(id_plan) 
		on delete set null
);

alter table usuario drop constraint id_rol_usuario;

create table relacion_rol_usuario(
	id_relacion_rol_usuario int auto_increment primary key,
	id_rol_usuario int,
	id_usuario int,
	constraint fk_relacionRolUser_IdRolUser foreign key (id_rol_usuario) references rol_usuario(id_rol_usuario) 
		on delete set null,
	constraint fk_relacionRolUser_IdUsuario foreign key (id_usuario) references usuario(id_usuario) 
		on delete set null
);

create table usuario_responsable_atleta_junior(
	id_responsable_atleta_junior int auto_increment primary key,
	id_usuario_responsable int,
	id_usuario_atleta_junior int,
	constraint fk_Usuaio_Responsable foreign key (id_usuario_responsable) references usuario(id_usuario)
	on delete set null,
	constraint fk_Usuaio_AtletaJunior foreign key (id_usuario_atleta_junior) references usuario(id_usuario)
	on delete set null
);
-- falta table de usuario_pago
create table metodo_pago(
	id_metodo_pago int auto_increment primary key,
	nombre varchar(50)
);

create table oferta(
	id_oferta  int auto_increment primary key,
	nombre varchar(50),
	descuento decimal(10, 2)
)

create table suscripcion_usuario(
	id_suscripcion_usuario int auto_increment primary key,
	activa boolean,
	fechaInicio date,
	fechaFinalizacion date,
	id_plan int,
	id_usuario int,
	constraint fk_suscripcionIdPlan foreign key (id_plan) references plan(id_plan)
		on delete set null,
	constraint fk_suscripcionIdUsuario foreign key (id_usuario) references usuario(id_usuario)
		on delete set null	
);

create table suscripcion_pago(
	id_suscripcion_pago int auto_increment primary key,
	monto_inicial decimal(10, 2),
	monto_total decimal(10, 2),
	descuento decimal(10, 2),
	fecha_hora_pago timestamp default CURRENT_TIMESTAMP(),
	id_oferta int,
	id_metodo_pago int,
	id_suscripcion_usuario int,
	constraint fk_pagoIdSuscripcionUsuario foreign key (id_metodo_pago) references metodo_pago(id_metodo_pago)
		on delete set null,
	constraint fk_pagoIdMetodoPago foreign key (id_metodo_pago) references metodo_pago(id_metodo_pago)
		on delete set null,
	constraint fk_pagoIdOferta foreign key (id_oferta) references oferta(id_oferta)
		on delete set null		
);


create table etiqueta_entreno(
	id_etiqueta_entreno int auto_increment primary key,
	nombre varchar(50)
);


create table usuario_historial_entreno(
	id_usuario_historial_entreno int auto_increment primary key,
	tiempo_entreno decimal(4, 2),
	etiqueta_entreno varchar(50), 
	id_usuario int,
	constraint fk_historialEntreno_IdUser foreign key (id_usuario) references usuario(id_usuario)
		on delete set null,
);



-- administradores tables
create table rol(
	id_rol int auto_increment primary key,
	nombre varchar(40)
);

create table admin(
	id_admin int auto_increment primary key,
	nombre varchar(50),
	apellido varchar(50),
	fecha_nacimiento date,
	dui varchar(20),
	telefono varchar(15),
	email varchar(256),
	pass varchar(256)
);

create table rol_admin(
	id_rol_admin int auto_increment primary key,
	id_admin int,
	id_rol int
);



insert into rol_admin(id_admin, id_rol) values
(1,1)

select *from usuario;
select *from rol_usuario;
select *from relacion_rol_usuario;
 insert into relacion_rol_usuario(id_rol_usuario, id_usuario) values (1, 2);

insert into rol(nombre) values ('ADMIN'), ('SUPER_ADMIN'), ('USER');

insert into admin(nombre, apellido, email, pass)
values ('Juan', 'Pineda', 'juan2@gym.com', 'iamjuan');

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
    WHERE 
    usr.id_usuario = 15
    LIMIT 1

select *from rol_usuario;
select *from relacion_rol_usuario;
 insert into relacion_rol_usuario(id_rol_usuario, id_usuario) values (1, 2);
   
SELECT usr.id_usuario, ru.nombre as rol
from
	usuario usr
join relacion_rol_usuario rru
	on rru.id_usuario = usr.id_usuario
join rol_usuario ru
	on ru.id_rol_usuario = rru.id_rol_usuario
where usr.id_usuario = 1; 
    
SELECT usr.id_usuario, ru.nombre as tipo_usuario,
    FROM usuario usr
    JOIN
        relacion_rol_usuario rru
            on rru.id_usuario = usr.id_usuario
    JOIN 
        rol_usuario ru
        on ru.id_rol_usuario = rru.id_rol_usuario
    WHERE
        usr.id_usuario = 1
    LIMIT 1;

select * from plan;
select * from suscripcion_usuario;
select * from suscripcion_pago;
select * from metodo_pago;
insert into metodo_pago (nombre) values ('PAGO LOCAL'), ('TARGETA DE CREDITO/DEBITO');

SELECT susc_pago.id_suscripcion_pago, susc_pago.fecha_hora_pago, susc_pago.monto_total, 
    mtd_pago.nombre as metodo_pago
FROM 
    suscripcion_pago susc_pago
JOIN 
    metodo_pago mtd_pago 
    on mtd_pago.id_metodo_pago = susc_pago.id_metodo_pago
WHERE 
    susc_pago.id_suscripcion_usuario = 1
LIMIT 1;

insert into suscripcion_pago(monto_inicial, monto_total, descuento, id_metodo_pago, id_suscripcion_usuario)
values (20,20, 0, 1, 1 );

insert into suscripcion_usuario(activa, fechaInicio, fechaFinalizacion, id_plan, id_usuario)
values (true, '2025/12/9', '2025/12/10', 1, 1 );

SELECT susc_user.id_suscripcion_usuario, susc_user.activa as estado,
        susc_user.fechaInicio , susc_user.fechaFinalizacion, p.precio
    FROM suscripcion_usuario susc_user
    JOIN plan p
        on p.id_plan = susc_user.id_plan
    WHERE
        susc_user.id_usuario = 1
LIMIT 1;
    
    
    
    
select current_timestamp();

select *from admin;
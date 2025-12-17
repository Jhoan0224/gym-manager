-- create table gym_manager_db;
 
-- use gym_manager_db;

create table membresia(
	id_membresia int auto_increment primary key,
	nombre varchar(50),
	precio decimal(4, 2)
);

create table rol(
	id_rol int auto_increment primary key,
	nombre varchar(40)
);

create table usuario(
	id_usuario int auto_increment primary key,
	nombre varchar(50),
	apellido varchar(50),
	fecha_nacimiento date,
	correo varchar(50),
	telefono varchar(15),
	id_membresia int
);

create table admin(
	id_admin int auto_increment primary key,
	nombre varchar(50),
	apellido varchar(50),
	email varchar(256),
	pass varchar(256),
	id_rol int,
	constraint fk_adminRol foreign key (id_rol) references rol(id_rol)
		on delete set null
);


insert into rol(nombre) values ('ADMIN'), ('SUPER_ADMIN'), ('USER');

insert into admin(nombre, apellido, email, pass, id_rol)
values ('Juan', 'Pineda', 'juan2@gym.com', 'iamjuan', 1);


select current_timestamp();

select *from admin;
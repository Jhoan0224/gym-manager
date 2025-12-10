-- create table gym_manager_db;
 
-- use gym_manager_db;

create table membresia(
	id_membresia int auto_increment primary key,
	nombre varchar(50),
	precio decimal(4, 2)
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

select current_timestamp();

select *from membresia;
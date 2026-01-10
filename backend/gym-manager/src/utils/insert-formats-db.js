
const ID_TIPO_USUARIO = {ATLETA: 1, RESPONSABLE: 2, ATLETA_JUNIOR: 3}

// this seccon gives and standar order for isert into db and values
export function usuarioAtleta(formAtleta) {
    // create var to return
    const dbFormAtleta = {
        nombre: '', apellido: '', fecha_nacimiento: '', genero: '', peso:'',
        dui: '', telefono: '', email: '', pass_hash: '', id_tipo_usuario: '', id_plan: ''
    }

    // add correct values from client
    dbFormAtleta.nombre = formAtleta.nombre;
    dbFormAtleta.apellido = formAtleta.apellido;
    dbFormAtleta.fecha_nacimiento = formAtleta.fechaNacimiento;
    dbFormAtleta.genero = formAtleta.genero
    dbFormAtleta.peso = formAtleta.peso
    dbFormAtleta.dui = formAtleta.dui;
    dbFormAtleta.telefono = '';
    dbFormAtleta.email = formAtleta.email;
    dbFormAtleta.pass_hash = formAtleta.pass_hash
    dbFormAtleta.id_tipo_usuario = ID_TIPO_USUARIO.ATLETA;
    dbFormAtleta.id_plan = formAtleta.idPlan;

    // finally returt with the correct forma
    return dbFormAtleta;
}

export function usuarioResponsable(formResponsable) {

    const dbFormResponsable = {
        nombre: '', apellido: '', fecha_nacimiento: '', genero: '', dui: '',
        telefono: '', email: '', pass_hash: '', id_tipo_usuario: ''
    }
    
    dbFormResponsable.nombre = formResponsable.nombre;
    dbFormResponsable.apellido = formResponsable.apellido;
    dbFormResponsable.fecha_nacimiento = formResponsable.fechaNacimiento;
    dbFormResponsable.genero = formResponsable.genero
    dbFormResponsable.dui = formResponsable.dui;
    dbFormResponsable.telefono = '';
    dbFormResponsable.email = formResponsable.email;
    dbFormResponsable.pass_hash = formResponsable.pass_hash
    dbFormResponsable.id_tipo_usuario = ID_TIPO_USUARIO.RESPONSABLE;

    console.log('posible undefined: id_tipo_usuario >> ',dbFormResponsable.id_tipo_usuario )
    console.log('retornaod form responsable formateado: ', dbFormResponsable)
    return dbFormResponsable;
}

export function usuarioAtletaJunior(formAtletaJunior) {
    // create var to return
    const dbFormAtletaJunior = {
        nombre: '', apellido: '', fecha_nacimiento: '', genero: '', peso:'',
        id_tipo_usuario: '', id_plan: ''
    }

    // add correct values from client
    dbFormAtletaJunior.nombre = formAtletaJunior.nombre;
    dbFormAtletaJunior.apellido = formAtletaJunior.apellido;
    dbFormAtletaJunior.fecha_nacimiento = formAtletaJunior.fechaNacimiento;
    dbFormAtletaJunior.genero = formAtletaJunior.genero
    dbFormAtletaJunior.peso = formAtletaJunior.peso
    dbFormAtletaJunior.id_tipo_usuario = ID_TIPO_USUARIO.ATLETA_JUNIOR;
    dbFormAtletaJunior.id_plan = formAtletaJunior.idPlan;

    // finally returt with the correct forma
    return dbFormAtletaJunior;
}

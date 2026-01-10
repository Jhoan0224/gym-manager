const EMAIL_REGEX = /^[a-zA-Z0-9.]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,}$/;
const DUI_REGEXT = /^[0-9]+(-[0-9]+)?$/;
const TELEFONO_REGEXT = /^[0-9]+(-[0-9]+)?$/;
// validacion de nombres solo texto
const TEXT_REGEX = /^[\p{L}\s]+$/u;
// edades atleta junior
const EDAD_ATLETA_JUNIOR_MIN = 2;
const EDAD_ATLETA_JUNIOR_MAX = 17;
// edades de atletas
const EDAD_ATLETA_MIN = 18;
const EDAD_ATLETA_MAX = 18;
// peso de atletas
const PESO_ATLETA_MIN = 1;
const PESO_ATLETA_MAX = 180;

export function emailIsValid(email) {
    let emailValido = EMAIL_REGEX.test(email);
    return emailValido;
}

export function duiIsValid(dui) {
    let duiValido = DUI_REGEXT.test(dui);
    return duiValido;
}

export function telefonoIsValido(telefono) {
    let telefonoValido = TELEFONO_REGEXT.test(telefono);
    return telefonoValido;
}


export function nombresIsValid(textoForm) {
    let nombreValido = TEXT_REGEX.test(textoForm);
    return nombreValido;
}

export function edadAtletaIsValid(fechaNacimiento) {
    const fechaActual = new Date();

    const fechaLimite = new Date(
        fechaActual.getFullYear() - EDAD_ATLETA_MIN,
        fechaActual.getMonth(),
        fechaActual.getDate()
    );
    // retornar true o false si es mayor de 18 o no
    return new Date(fechaNacimiento) <= fechaLimite;
}

export function pesoIsValid(pesoAtleta) {

    if (pesoAtleta >= PESO_ATLETA_MIN && pesoAtleta <= PESO_ATLETA_MAX ) {
        return true;
    }
    return false;
}
import { emailIsValid, duiIsValid, telefonoIsValido, edadAtletaIsValid, nombresIsValid, pesoIsValid } from "../validation-rules/user-data-rules.js";

export function usuarioAtleta(formAtleta) {
    const VALIDATION_RESULT = {
        success: false,
        message: 'OK',
    }
 
    const arrayTextValues = [formAtleta.nombre, formAtleta.apellido];
    const nombresValidationResult = arrayTextValues.map(text => nombresIsValid(text));

    if (nombresValidationResult === false) {
        VALIDATION_RESULT.message = 'Nombre o Apellido no son validos';
        return VALIDATION_RESULT;
    }

    // valida si la edad del atleta es mayor a 18 es true sino false
    if (edadAtletaIsValid(formAtleta.fechaNacimiento) === false) {
        VALIDATION_RESULT.message = 'La Edad del Atleta no es valida';
        return VALIDATION_RESULT;
    }

    if (pesoIsValid(formAtleta.peso) === false) {
        VALIDATION_RESULT.message = 'El Peso del Atleta no es valido';
        return VALIDATION_RESULT;
    }

    // THE PASSWORD IS NOT VERIFY HERE 

    if(emailIsValid(formAtleta.email) === false) {
        VALIDATION_RESULT.message = 'El formato del Email proporcionado no es valido';
        return VALIDATION_RESULT;
    }
    if (duiIsValid(formAtleta.dui) === false) {
        VALIDATION_RESULT.message = 'El formato del DUI proporcionado no es valido';
        return VALIDATION_RESULT;
    }
    // if (telefonoIsValido(formAtleta.telefono) === false) {
    //     VALIDATION_RESULT.message = 'El Telefono proporcionado no es valido';
    //     return VALIDATION_RESULT;
    // }
    else {
        VALIDATION_RESULT.success = true;
        return VALIDATION_RESULT;
    }
}

export function usuarioResponsable(formResponsable) {
    const VALIDATION_RESULT = {
        success: false,
        message: 'OK',
    }
 
    const arrayTextValues = [formResponsable.nombre, formResponsable.apellido];
    const nombresValidationResult = arrayTextValues.map(text => nombresIsValid(text));

    if (nombresValidationResult === false) {
        VALIDATION_RESULT.message = 'Nombre o Apellido no son validos';
        return VALIDATION_RESULT;
    }

    // valida si la edad del atleta es mayor a 18 es true sino false
    if (edadAtletaIsValid(formResponsable.fechaNacimiento) === false) {
        VALIDATION_RESULT.message = 'La Edad del Atleta no es valida';
        return VALIDATION_RESULT;
    }

    // THE PASSWORD IS NOT VERIFY HERE 

    if(emailIsValid(formResponsable.email) === false) {
        VALIDATION_RESULT.message = 'El formato del Email proporcionado no es valido';
        return VALIDATION_RESULT;
    }
    if (duiIsValid(formResponsable.dui) === false) {
        VALIDATION_RESULT.message = 'El formato del DUI proporcionado no es valido';
        return VALIDATION_RESULT;
    }
    // if (telefonoIsValido(formResponsable.telefono) === false) {
    //     VALIDATION_RESULT.message = 'El Telefono proporcionado no es valido';
    //     return VALIDATION_RESULT;
    // }
    else {
        VALIDATION_RESULT.success = true;
        return VALIDATION_RESULT;
    }
}

export function usuarioAtletaJunior(formAtletaJunior) {
    const VALIDATION_RESULT = {
        success: false,
        message: 'OK',
    }
 
    const arrayTextValues = [formAtletaJunior.nombre, formAtletaJunior.apellido];
    const nombresValidationResult = arrayTextValues.map(text => nombresIsValid(text));

    if (nombresValidationResult === false) {
        VALIDATION_RESULT.message = 'Nombre o Apellido no son validos';
        return VALIDATION_RESULT;
    }

    // valida si la edad del atleta es mayor a 18 es true sino false
    // Atleta Junior debe tener edad menor a 18, entonces si es true no es valido
    if (edadAtletaIsValid(formAtletaJunior.fechaNacimiento) === true) {
        VALIDATION_RESULT.message = 'La Edad del Atleta no es valida';
        return VALIDATION_RESULT;
    }
    else {
        VALIDATION_RESULT.success = true;
        return MESSAGE_RESPONSE;
    }
}

export function pagoUsuarioLocal(formPagoUserLocal) {
    const VALIDATION_RESULT = {
        success: false,
        message: 'OK',
    }
    

    if (emailIsValid(formPagoUserLocal.email) === false) {
        VALIDATION_RESULT.message = 'El formato del Email no es valido';
        return VALIDATION_RESULT;
    }

    // valida si la edad del atleta es mayor a 18 es true sino false
    // Atleta Junior debe tener edad menor a 18, entonces si es true no es valido
    if (duiIsValid(formPagoUserLocal.dui) === true) {
        VALIDATION_RESULT.message = 'El formato del DUI no es valido';
        return VALIDATION_RESULT;
    }

    /*
        FALTAN VALIDACIONES PARA ID DE LA SUSCRIPCION QUE DEBA SER UN NUMERO MAYOR A 0 Y DEBE SER ENTERO
    */

    VALIDATION_RESULT.success = true;
    return MESSAGE_RESPONSE;
}

export const AUTH_RESPONSE_OK = {
    message: 'Inicio de sesion exitoso',
    validAuth: true,
    token: ''
}
export const AUTH_RESPONSE_FAILED = {
    message: 'Las credenciales proporcionadas no son validas',
    validAuth: false,
    token: null
}
export const AUTH_RESPONSE_ERROR = {
    message: 'Ocurrio un Error al realizar la autenticacion de credenciales',
    validAuth: false,
    token: null
}


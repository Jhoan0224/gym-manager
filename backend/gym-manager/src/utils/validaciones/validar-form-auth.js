import {emailIsValid} from '../validation-rules/user-data-rules.js'

export function validarFormLogin(formLogin) {
    const NUM_FIELDS_MAX = 2;

    // Logitud del form sea de 2 campos
    if ( !formLogin || Object.keys(formLogin).length !== NUM_FIELDS_MAX) {
        return false;
    }
    if (emailIsValid(formLogin.email) !== true) {
        return false;
    }
    if (!formLogin.pass || formLogin.pass.trim().length === 0) {
        return false;
    } else {
        return true;
    }
}
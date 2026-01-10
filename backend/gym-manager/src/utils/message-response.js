
export const HTTP_STATUS = {
    SUCCESS: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    ERROR: 500
};


export const MESSAGES = {
  // Mensajes de éxito
  SUCCESS: {
    DEFAULT: "Operación realizada con éxito.",
    CREATED: "Recurso creado correctamente.",
    UPDATED: "Datos actualizados exitosamente.",
    DELETED: "Registro eliminado de forma permanente."
  },

  // Mensajes de error de cliente (4xx)
  CLIENT: {
    BAD_REQUEST: "La información enviada es incorrecta o está incompleta.",
    UNAUTHORIZED: "No tienes permiso para acceder a este recurso.",
    FORBIDDEN: "Acceso denegado. No tienes los privilegios necesarios.",
    NOT_FOUND: "Lo sentimos, el recurso solicitado no existe.",
    VALIDATION: "Error de validación en los campos del formulario."
  },

  // Mensajes de error de servidor (5xx)
  SERVER: {
    INTERNAL_ERROR: "Hubo un problema interno en el servidor. Inténtalo más tarde.",
    DB_CONNECTION: "Error al conectar con la base de datos.",
    TIMEOUT: "El servidor tardó demasiado en responder."
  }
};
export const VALIDATION_FAILED = {
    susccess: false,
    message: 'Error de validación en los campos del formulario.',
    data: {}
}

export const BAD_REQUEST = {
    susccess: false,
    message: 'La información enviada es incorrecta o está incompleta',
    data: {}
} 

export const SERVER_ERROR = {
    susccess: false,
    message: 'Ocurrio un Error dentro del Servidor',
    data: {}
}

export const UNAUTHORIZED = {
    susccess: false,
    message: 'No tienes permiso para acceder a este recurso',
    data: {}
}
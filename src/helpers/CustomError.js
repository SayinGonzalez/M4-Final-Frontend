
export default class CustomError extends Error {

  constructor(message, type = "BackendError") {
    super(message); // llama al constructor de Error y setea .message
    this.name = this.constructor.name; // nombre de la clase (CustomError)
    this.type = type; // "BackendError" o "NetworkError"

    // capturar stack limpio (opcional)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
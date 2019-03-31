'use strict'

/**
 * @apiDefine UnauthorizedError Unauthorized
 * @apiError (401) Unauthorized User is not allowed to do that
 * @apiErrorExample {json} Error-401-Response:
 * {
 *   "status": 401,
 *   "message": "..."
 * }
 */
class UnauthorizedError extends Error {
  constructor(message) {
    super(message)
    // Ensure the name of this error is the same as the class name
    this.name = this.constructor.name
    // This clips the constructor invocation from the stack trace.
    // It's not absolutely essential, but it does make the stack trace a little nicer.
    //  @see Node.js reference (bottom)
    Error.captureStackTrace(this, this.constructor)
    this.message = message
    this.status = 401
  }
}

module.exports = UnauthorizedError

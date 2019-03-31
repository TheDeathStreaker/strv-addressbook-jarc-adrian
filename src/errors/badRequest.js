'use strict'

/**
 * @apiDefine BadRequestError Bad request
 * @apiError (400) BadRequest Data sent to API is wrong
 * @apiErrorExample {json} Error-400-Response:
 * {
 *   "status": 400,
 *   "message": "..."
 * }
 */
class BadRequestError extends Error {
  constructor(message) {
    super(message)
    // Ensure the name of this error is the same as the class name
    this.name = this.constructor.name
    // This clips the constructor invocation from the stack trace.
    // It's not absolutely essential, but it does make the stack trace a little nicer.
    //  @see Node.js reference (bottom)
    Error.captureStackTrace(this, this.constructor)
    this.message = message
    this.status = 400
  }
}

module.exports = BadRequestError

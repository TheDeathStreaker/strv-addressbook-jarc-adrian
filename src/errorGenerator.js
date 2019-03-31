'use strict'

const BadRequestError = require('./errors/badRequest')
const UnauthorizedError = require('./errors/unauthorized')

/**
 * @apiDefine ServerError Server error
 * @apiError (500) status Error's status code
 * @apiError (500) message Error description
 * @apiError (500) [code] Optional error code
 *
 * @apiErrorExample {json} Error-500-Response:
 * {
 *   "status": 500,
 *   "message": "..."
 * }
 */

const badRequest = resource => new BadRequestError(resource)
const unauthorized = message => new UnauthorizedError(message)


module.exports = {
  badRequest,
  unauthorized,
}

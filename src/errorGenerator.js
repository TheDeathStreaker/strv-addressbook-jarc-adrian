'use strict'

const BadRequestError = require('./errors/badRequest')
const UnauthorizedError = require('./errors/unauthorized')

const badRequest = resource => new BadRequestError(resource)
const unauthorized = message => new UnauthorizedError(message)


module.exports = {
  badRequest,
  unauthorized,
}

'use strict'

const BadRequestError = require('./errors/badRequest')

const badRequest = resource => new BadRequestError(resource)

module.exports = {
  badRequest,
}

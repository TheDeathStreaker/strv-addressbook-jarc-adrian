'use strict'

const service = require('./login.service')

// eslint-disable-next-line valid-jsdoc
/**
 * @api {post} /login Login user
 * @apiName Login
 * @apiGroup Login
 * @apiDescription Login user
 *
 * @apiParam {String} email User's name
 * @apiParam {String} password User's password
 *
 * @apiParamExample {json} Request-Example
 * {
 *   "email": "test@test.com",
 *   "password": "3xAmPl€"
 * }
 *
 * @apiSuccess {String} token user was succesfully logged in
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 * {
 *   "token": "..."
 * }
 *
 * @apiUse BadRequestError
 * @apiUse UnauthorizedError
 * @apiUse ServerError
 */
const login = async (req, res, next) => {
  try {
    const {
      email,
      password,
    } = req.body

    const token = await service.login(email, password)

    return res.send(token)
  } catch (error) {
    return next(error)
  }
}

module.exports = {
  login,
}

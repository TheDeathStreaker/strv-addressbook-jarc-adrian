'use strict'

const service = require('./contacts.service')

// eslint-disable-next-line valid-jsdoc
/**
 * @api {post} /contacts Add contact
 * @apiName Add
 * @apiGroup Contacts
 * @apiDescription Add contactc for logged in user
 *
 * @apiUse token
 *
 * @apiParam {String} name Contact's name
 * @apiParam {String} lastName Contact's last name
 * @apiParam {String} email Contact's email
 * @apiParam {String} [phoneNumber] Contact's phone number
 * @apiParam {String} [nickname] Contact's nickname
 *
 * @apiParamExample {json} Request-Example
 * {
 *   "name": "Test",
 *   "lastName": "Test",
 *   "email": "test@test.com"
 * }
 *
 * @apiSuccess {String} status Was contact added
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 * {
 *   "status": "OK"
 * }
 *
 * @apiUse BadRequestError
 * @apiUse UnauthorizedError
 * @apiUse ServerError
 */
const add = async (req, res, next) => {
  try {
    const {
      user,
      body,
    } = req

    const response = await service.addContact(user, body)

    return res.send(response)
  } catch (error) {
    return next(error)
  }
}

module.exports = {
  add,
}

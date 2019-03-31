'use strict'

const service = require('./register.service')

// eslint-disable-next-line valid-jsdoc
/**
 * @api {post} /register Add user
 * @apiName Register
 * @apiGroup Register
 * @apiDescription Register user
 *
 * @apiParam {String} email User's email
 * @apiParam {String} password User's password
 * @apiParam {String} [firstName] User's first name
 * @apiParam {String} [lastName] User's last name
 * @apiParam {String} [phoneNumber] User's phone number
 *
 * @apiParamExample {json} Request-Example
 * {
 *   "email": "test@test.com",
 *   "password": "3xAmPl€",
 *   "firstName": "Test",
 *   "lastName": "Test",
 *   "phoneNumber": "0000000",
 * }
 *
 * @apiSuccess {String} _id user's id in db
 * @apiSuccess {String} email user's email
 * @apiSuccess {String} firstName user's name
 * @apiSuccess {String} lastName user's last name
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 * {
 *   "_id": "5ca0a413788d8d6fb97029a1",
 *   "email": "adrianja1@gmail.com",
 *   "firstName": "Adrian",
 *   "lastName": "Jarc"
 * }
 *
 * @apiUse BadRequestError
 * @apiUse ServerError
 */
const registerUser = async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
    } = req.body

    const added = await service.addUser(email, password, {
      firstName,
      lastName,
      phoneNumber,
    })

    return res.send(added)
  } catch (error) {
    return next(error)
  }
}

module.exports = {
  registerUser,
}

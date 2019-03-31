/* eslint-disable valid-jsdoc */
'use strict'

const jwt = require('../jwt')
const errorGen = require('../errorGenerator')

/**
 * @apiDefine token User access only
 * @apiHeader {String} authorization Json web token (should be preponed with 'Bearer ')
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "authorization": "Bearer ..."
 *     }
 */
const validate = (req, res, next) => {
  try {
    const { authorization } = req.headers

    const token = authorization.replace('Bearer', '').trim()

    const decoded = jwt.checkJWT(token)
    req.user = decoded

    return next()
  } catch (error) {
    return next(errorGen.unauthorized(error.message))
  }
}

module.exports = validate

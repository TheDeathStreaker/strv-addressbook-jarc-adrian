'use strict'

const jwt = require('../jwt')
const errorGen = require('../errorGenerator')

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

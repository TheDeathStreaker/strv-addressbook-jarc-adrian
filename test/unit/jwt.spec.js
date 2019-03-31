'use strict'

const chai = require('chai')
const jwt = require('../../src/jwt')

let user = {}
let token = null

describe('Test jwt', () => {
  beforeEach('Setup user and get token', () => {
    user = {
      _id: '1',
      firstName: 'Test',
      lastName: 'Test',
      email: 'test@test.com',
    }

    token = jwt.createJWT(user)
  })

  afterEach('Reset user and token', () => {
    user = {}
    token = null
  })

  it('should return JWT', async () => {
    chai.assert.isNotEmpty(token)
  })

  it('should return decoded token if token correct', async () => {
    const decoded = await jwt.checkJWT(token)

    chai.assert.deepInclude(decoded, user)
  })

  it('should throw error if invalid JWT', async () => {
    token += 'asd'
    const checkJWT = () => jwt.checkJWT(token)

    chai.assert.throws(checkJWT, 'invalid signature')
  })
})

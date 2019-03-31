'use strict'

const chai = require('chai')
const encryption = require('../../src/encryption')

let hash = null
let password = null

describe('Test encryption', () => {
  beforeEach('Setup password and get hash', async () => {
    password = 'T3$tT3$t'
    hash = await encryption.encryptPassword(password)
  })

  afterEach('Reset password and hash', () => {
    password = null
    hash = null
  })

  it('should return hashed password', () => {
    chai.assert.isNotEmpty(hash)
  })

  it('should return true if password correct', async () => {
    const passwordCorrect = await encryption.verifyPassword(hash, password)

    chai.assert.isTrue(passwordCorrect)
  })

  it('should return false if password incorrect', async () => {
    password = '7e$T7e$T'
    const passwordCorrect = await encryption.verifyPassword(hash, password)

    chai.assert.isFalse(passwordCorrect)
  })
})

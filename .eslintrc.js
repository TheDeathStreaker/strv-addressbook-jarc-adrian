'use strict'

module.exports = {
  extends: [
    '@strv/eslint-config-node/v10',
    '@strv/eslint-config-node/optional',
    '@strv/eslint-config-mocha/',
    '@strv/eslint-config-node/style'
  ],
  globals: {
    USERS: false
  },
}

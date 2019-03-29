'use strict'

// eslint-disable-next-line no-process-env
const getEnvironmentSetting = setting => process.env[setting]

module.exports = getEnvironmentSetting
